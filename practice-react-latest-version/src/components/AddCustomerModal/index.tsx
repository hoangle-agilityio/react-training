// Libs
import React, { memo, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "react-query";
import { CircularProgress, Flex } from "@chakra-ui/react";

// Components
import Modal from "components/Modal";
import Input from "components/Input";
import Select from "components/Select";
import Button from "components/Button";
import Notification from "components/Notification";

// Constants
import { ACTION_TYPE, MAX_LENGTH, statusOptions } from "constants/variables";
import { ERROR_MESSAGE } from "constants/message";
import { REGEX_PATTERNS } from "constants/regexPatterns";
import { CUSTOMER_ENDPOINT } from "constants/endpoint";

// Types
import { OptionType, WithID } from "types/common";
import { MultiValue, SingleValue } from "react-select";
import { Customer } from "types/customer";

// Utils
import {
  convertDataToObject,
  generateRandomCustomerId,
  regexValue,
} from "utils/utilities";

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
  status: OptionType;
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

  // fetch customer data by id
  const {
    data: customer,
    isFetching,
    error: errorFetchData,
    isError: isErrorFetchData,
  }: UseQueryResult<Customer, Error> = useQuery(
    "customer",
    () => id && fetchCustomer(id),
    {
      refetchOnWindowFocus: false,
    }
  );

  // if type is add, create customer
  // otherwise, update customer
  const {
    mutate,
    isError,
    error,
    isLoading,
  }: UseMutationResult<Customer, Error, Customer, unknown> = useMutation(
    (input: Customer) =>
      type === ACTION_TYPE.ADD
        ? createCustomer(input)
        : updateCustomer(input as WithID<Customer>),
    {
      onSettled() {
        queryClient.refetchQueries(CUSTOMER_ENDPOINT);
        onClose();
      },
    }
  );

  const setDefaultValues = useCallback(() => {
    setValue("name", customer?.name || "");
    setValue("description", customer?.description || "");
    setValue(
      "status",
      convertDataToObject(customer?.status as string) || statusOptions[0]
    );
    setValue("rate", customer?.rate?.toString() || "");
    setValue("balance", customer?.balance?.toString() || "");
    setValue("deposit", customer?.deposit?.toString() || "");
  }, [setValue, customer]);

  // set default value
  useEffect(() => {
    let didCancel = false;

    if (!didCancel) {
      setDefaultValues();
    }

    return () => {
      didCancel = true;
    };
  }, [setDefaultValues]);

  // handle change name
  const handleChangeName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;

    setValue("name", value);
    clearErrors("name");
  };

  // handle change description
  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;

    setValue("description", value);
    clearErrors("description");
  };

  // handle change status
  const handleChangeStatus = (
    data: SingleValue<OptionType> | MultiValue<OptionType>
  ) => {
    setValue("status", data as OptionType);
  };

  // handle change rate
  const handleChangeRate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const match = regexValue(e.target.value, REGEX_PATTERNS.INTEGER_4_DIGITS);
    const value = (!!match && match[1]) || "";

    setValue("rate", value);
    clearErrors("rate");
  };

  // handle change balance
  const handleChangeBalance = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const match = regexValue(e.target.value, REGEX_PATTERNS.NEGATIVE_4_DIGITS);
    const value = (!!match && match[1]) || "";

    setValue("balance", value);
    clearErrors("balance");
  };

  // handle change deposit
  const handleChangeDeposit = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const match = regexValue(e.target.value, REGEX_PATTERNS.INTEGER_4_DIGITS);
    const value = (!!match && match[1]) || "";

    setValue("deposit", value);
    clearErrors("deposit");
  };

  // handle submit customer data
  const handleSubmitCustomerData = () => {
    const inputCustomer = {
      ...(type === ACTION_TYPE.EDIT && { id }),
      name: getValues("name"),
      customerId: generateRandomCustomerId(),
      description: getValues("description"),
      status: getValues("status").value,
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
        onChange={(e) => handleChangeName(e)}
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
        onChange={(e) => handleChangeDescription(e)}
        isDisabled={type === ACTION_TYPE.VIEW}
      />
      <Select
        label="Status"
        options={statusOptions}
        styles={{
          wrapper: {
            width: "401px",
            marginBottom: "30px",
            ...(type === ACTION_TYPE.VIEW && {
              cursor: "not-allowed",
            }),
          },
          controlStyles: {
            height: "51px",
          },
        }}
        value={watch("status") || {}}
        {...register("status")}
        onChange={(e) => handleChangeStatus(e)}
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
        onChange={(e) => handleChangeRate(e)}
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
        onChange={(e) => handleChangeBalance(e)}
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
        onChange={(e) => handleChangeDeposit(e)}
        isDisabled={type === ACTION_TYPE.VIEW}
      />
      {(isError || isErrorFetchData) && (
        <Notification
          message={error?.message || errorFetchData?.message || ""}
          type="error"
        />
      )}
      {type !== ACTION_TYPE.VIEW && (
        <Button
          label={type === ACTION_TYPE.ADD ? "Create" : "Save Changes"}
          styles={{
            width: "173px",
            height: "51px",
            marginBottom: "13px",
          }}
          onClick={handleSubmit(handleSubmitCustomerData)}
        />
      )}
      <Button
        label="Cancel"
        styles={{
          width: "173px",
          height: "51px",
        }}
        type="secondary"
        onClick={onClose}
      />
      {(isLoading || isFetching) && (
        <Flex
          justifyContent="center"
          alignItems="center"
          bgColor="gray.200"
          position="fixed"
          opacity="0.5"
          width="full"
          height="full"
          top="0"
          left="0"
        >
          <CircularProgress isIndeterminate color="gray.300" size="60px" />
        </Flex>
      )}
    </Modal>
  );
};

export default memo(AddCustomerModal);
