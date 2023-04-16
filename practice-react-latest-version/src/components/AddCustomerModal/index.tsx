// Libs
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "react-query";
import { Button, CircularProgress, Flex, useToast } from "@chakra-ui/react";

// Components
import Modal from "components/Modal";
import Input from "components/Input";
import Select from "components/Select";

// Constants
import { ACTION_TYPE, MAX_LENGTH, statusOptions } from "constants/variables";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "constants/message";
import { REGEX_PATTERNS } from "constants/regexPatterns";
import { CUSTOMER_ENDPOINT } from "constants/endpoint";

// Types
import { WithID } from "types/common";
import { Customer } from "types/customer";

// Utils
import { generateRandomCustomerId, regexValue } from "utils/utilities";

// Queries
import {
  createCustomer,
  fetchCustomer,
  updateCustomer,
} from "services/customers";

type Props = {
  type: string;
  id?: string;
  isOpen: boolean;
  onClose: () => void;
};

type FormValues = {
  name: string;
  description: string;
  status: string;
  rate: string;
  balance: string;
  deposit: string;
};

const AddCustomerModal = ({ type, id, isOpen, onClose }: Props) => {
  const {
    setValue,
    getValues,
    watch,
    handleSubmit,
    register,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>();
  const queryClient = useQueryClient();
  const toast = useToast();

  // fetch customer data by id
  const { isFetching }: UseQueryResult<Customer, Error> = useQuery(
    "customer",
    () => id && fetchCustomer(id),
    {
      refetchOnWindowFocus: false,
      onSuccess(customer) {
        setValue("name", customer?.name || "");
        setValue("description", customer?.description || "");
        setValue("status", customer?.status || statusOptions[0].value);
        setValue("rate", customer?.rate?.toString() || "");
        setValue("balance", customer?.balance?.toString() || "");
        setValue("deposit", customer?.deposit?.toString() || "");
      },
      onError(error) {
        toast({
          position: "top",
          description: error.message,
          status: "error",
          isClosable: true,
        });
      },
    }
  );

  // if type is add, create customer
  // otherwise, update customer
  const {
    mutate,
    isLoading,
  }: UseMutationResult<Customer, Error, Customer, unknown> = useMutation(
    (input: Customer) =>
      type === ACTION_TYPE.ADD
        ? createCustomer(input)
        : updateCustomer(input as WithID<Customer>),
    {
      onSuccess() {
        queryClient.refetchQueries(CUSTOMER_ENDPOINT);
        toast({
          position: "top",
          description:
            type === ACTION_TYPE.ADD
              ? SUCCESS_MESSAGE.CREATE
              : SUCCESS_MESSAGE.UPDATE,
          status: "success",
          isClosable: true,
        });
        onClose();
      },
      onError(error) {
        toast({
          position: "top",
          description: error.message,
          status: "error",
          isClosable: true,
        });
      },
    }
  );

  // handle change name
  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;

      setValue("name", value);
      clearErrors("name");
    },
    [setValue, clearErrors]
  );

  // handle change description
  const handleChangeDescription = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;

      setValue("description", value);
      clearErrors("description");
    },
    [setValue, clearErrors]
  );

  // handle change status
  const handleChangeStatus = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValue("status", e.target.value);
    },
    [setValue]
  );

  // handle change rate
  const handleChangeRate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const match = regexValue(e.target.value, REGEX_PATTERNS.INTEGER_4_DIGITS);
      const value = (!!match && match[1]) || "";

      setValue("rate", value);
      clearErrors("rate");
    },
    [setValue, clearErrors]
  );

  // handle change balance
  const handleChangeBalance = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const match = regexValue(
        e.target.value,
        REGEX_PATTERNS.NEGATIVE_4_DIGITS
      );
      const value = (!!match && match[1]) || "";

      setValue("balance", value);
      clearErrors("balance");
    },
    [setValue, clearErrors]
  );

  // handle change deposit
  const handleChangeDeposit = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const match = regexValue(e.target.value, REGEX_PATTERNS.INTEGER_4_DIGITS);
      const value = (!!match && match[1]) || "";

      setValue("deposit", value);
      clearErrors("deposit");
    },
    [setValue, clearErrors]
  );

  // handle submit customer data
  const handleSubmitCustomerData = () => {
    const inputCustomer = {
      ...(type === ACTION_TYPE.EDIT && { id }),
      name: getValues("name"),
      customerId: generateRandomCustomerId(),
      description: getValues("description"),
      status: getValues("status"),
      rate: parseInt(getValues("rate")),
      balance: parseInt(getValues("balance")),
      deposit: parseInt(getValues("deposit")),
    };

    mutate(inputCustomer);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        type === ACTION_TYPE.ADD
          ? "Add Customer"
          : type === ACTION_TYPE.EDIT
          ? "Edit Customer"
          : "View Customer"
      }
      size="xl"
      styles={{
        wrapper: {
          alignItems: "center",
          marginTop: "15px",
        },
        title: {
          marginBottom: "20px",
          fontSize: "lg",
        },
      }}
    >
      <Input
        label="Name"
        styles={{
          wrapper: {
            width: "401px",
            marginBottom: "30px",
          },
          input: {
            height: "51px",
          },
        }}
        value={watch("name") || ""}
        {...register("name", {
          required: ERROR_MESSAGE.REQUIRED,
          maxLength: {
            value: MAX_LENGTH,
            message: ERROR_MESSAGE.INVALID_255_CHARACTERS,
          },
        })}
        error={errors?.name?.message ?? ""}
        onChange={handleChangeName}
        isDisabled={type === ACTION_TYPE.VIEW}
      />
      <Input
        label="Description"
        styles={{
          wrapper: {
            width: "401px",
            marginBottom: "30px",
          },
        }}
        isTextArea
        value={watch("description") || ""}
        {...register("description", {
          required: ERROR_MESSAGE.REQUIRED,
          maxLength: {
            value: MAX_LENGTH,
            message: ERROR_MESSAGE.INVALID_255_CHARACTERS,
          },
        })}
        error={errors?.description?.message ?? ""}
        onChange={handleChangeDescription}
        isDisabled={type === ACTION_TYPE.VIEW}
      />
      <Select
        label="Status"
        options={statusOptions}
        styleWrapper={{
          width: "401px",
          marginBottom: "30px",
          ...(type === ACTION_TYPE.VIEW && {
            cursor: "not-allowed",
          }),
        }}
        height="51px"
        value={watch("status") || ""}
        {...register("status")}
        onChange={handleChangeStatus}
        isDisabled={type === ACTION_TYPE.VIEW}
      />
      <Input
        label="Rate"
        styles={{
          wrapper: {
            width: "401px",
            marginBottom: "30px",
          },
          input: {
            height: "51px",
          },
        }}
        value={watch("rate") || ""}
        {...register("rate", {
          required: ERROR_MESSAGE.REQUIRED,
        })}
        error={errors?.rate?.message ?? ""}
        onChange={handleChangeRate}
        isDisabled={type === ACTION_TYPE.VIEW}
      />
      <Input
        label="Balance"
        styles={{
          wrapper: {
            width: "401px",
            marginBottom: "30px",
          },
          input: {
            height: "51px",
          },
        }}
        value={watch("balance") || ""}
        {...register("balance", {
          required: ERROR_MESSAGE.REQUIRED,
        })}
        error={errors?.balance?.message ?? ""}
        onChange={handleChangeBalance}
        isDisabled={type === ACTION_TYPE.VIEW}
      />
      <Input
        label="Deposit"
        styles={{
          wrapper: {
            width: "401px",
            marginBottom: "30px",
          },
          input: {
            height: "51px",
          },
        }}
        value={watch("deposit") || ""}
        {...register("deposit", {
          required: ERROR_MESSAGE.REQUIRED,
        })}
        error={errors?.deposit?.message ?? ""}
        onChange={handleChangeDeposit}
        isDisabled={type === ACTION_TYPE.VIEW}
      />
      {type !== ACTION_TYPE.VIEW && (
        <Button
          width="173px"
          height="51px"
          marginBottom="13px"
          onClick={handleSubmit(handleSubmitCustomerData)}
        >
          {type === ACTION_TYPE.ADD ? "Create" : "Save Changes"}
        </Button>
      )}
      <Button width="173px" height="51px" variant="secondary" onClick={onClose}>
        Cancel
      </Button>
      {(isLoading || isFetching) && (
        <Flex
          justifyContent="center"
          alignItems="center"
          bgColor="background.default"
          position="fixed"
          opacity="0.5"
          width="full"
          height="full"
          top="0"
          left="0"
        >
          <CircularProgress isIndeterminate color="brand.300" size="60px" />
        </Flex>
      )}
    </Modal>
  );
};

export default AddCustomerModal;
