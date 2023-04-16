// Libs
import React, { Suspense, useState, useTransition } from "react";
import { InfiniteData } from "react-query";

// Components
import {
  Flex,
  Text,
  Image,
  Box,
  Tooltip,
  Badge as Status,
  Button,
} from "@chakra-ui/react";
import Dropdown from "components/Dropdown";

// Constants
import {
  ACTION_TYPE,
  customerDataTableHeader,
  sortOrders,
  SORT_IMAGE,
  SORT_ORDER,
} from "constants/variables";
import { ERROR_MESSAGE } from "constants/message";

// Types
import { Customer } from "types/customer";
import { WithID } from "types/common";

type Props = {
  data: InfiniteData<WithID<Customer>[]> | undefined;
  actionId: string;
  order: string;
  setActionId: React.Dispatch<React.SetStateAction<string>>;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
  renderIndicator: () => JSX.Element;
  handleConfirmDelete: (id: string) => void;
  handleOpenModal: (type: string, id: string) => void;
};

const CustomerTable = ({
  data,
  actionId,
  order,
  setActionId,
  setOrder,
  renderIndicator,
  handleConfirmDelete,
  handleOpenModal,
}: Props) => {
  const [sortImage, setSortImage] = useState(SORT_IMAGE.NONE);
  const [isPending, startTransition] = useTransition();

  // handle sort by name
  const handleSortByName = () => {
    // find current index in list of sort order
    const findIndex = sortOrders.findIndex((data) => data === order);

    // calculate next index based on find index
    const nextIndex = findIndex === sortOrders.length - 1 ? 0 : findIndex + 1;

    // set sort image
    setSortImage(
      sortOrders[nextIndex] === SORT_ORDER.NONE
        ? SORT_IMAGE.NONE
        : sortOrders[nextIndex] === SORT_ORDER.SORT_ASC
        ? SORT_IMAGE.ASC
        : SORT_IMAGE.DESC
    );

    startTransition(() => {
      setOrder(sortOrders[nextIndex]);
    });
  };

  const renderHeader = () => {
    const srcImage = `/icons/${sortImage}`;

    return (
      <Flex
        alignItems="center"
        fontFamily="heading"
        justifyContent="space-between"
        padding="12px 20px"
        fontSize="base"
      >
        <Flex
          alignItems="center"
          width="160px"
          onClick={handleSortByName}
          cursor="pointer"
        >
          <Text>Name</Text>
          <Image src={srcImage} width="16px" height="16px" alt={srcImage} />
        </Flex>
        {customerDataTableHeader.map(({ name, width, alignLeft }) => (
          <Text
            width={width}
            textAlign={alignLeft ? "left" : "right"}
            marginLeft="20px"
            key={Math.random()}
          >
            {name}
          </Text>
        ))}
        <Box width="20px" />
      </Flex>
    );
  };

  const renderAction = (id: string) => (
    <Dropdown
      renderMenu={() => <Text fontSize="lg">&#x22EF;</Text>}
      stylesOption={{ width: "120px" }}
      isActive={actionId === id}
      isShowDropdown={!!actionId}
      onOpen={() => setActionId(id)}
      onClose={() => setActionId("")}
    >
      <Button
        variant="secondary"
        color="icon.primary"
        width="full"
        justifyContent="space-between"
        borderRadius="0"
        rightIcon={
          <Image
            src="/icons/info.svg"
            width="16px"
            height="16px"
            alt="icon info"
          />
        }
        onClick={() => handleOpenModal(ACTION_TYPE.VIEW, id)}
      >
        View
      </Button>
      <Button
        variant="secondary"
        color="icon.primary"
        width="full"
        justifyContent="space-between"
        borderRadius="0"
        rightIcon={
          <Image
            src="/icons/pencil-filed.svg"
            width="16px"
            height="16px"
            alt="icon edit"
          />
        }
        onClick={() => handleOpenModal(ACTION_TYPE.EDIT, id)}
      >
        Edit
      </Button>
      <Button
        variant="secondary"
        width="full"
        justifyContent="space-between"
        borderRadius="0"
        rightIcon={
          <Image
            src="/icons/trash-filled.svg"
            width="16px"
            height="16px"
            alt="icon delete"
          />
        }
        onClick={() => handleConfirmDelete(id)}
      >
        Delete
      </Button>
    </Dropdown>
  );

  const renderBody = (customers: WithID<Customer>[]) =>
    customers?.length > 0 ? (
      customers?.map(
        (
          { id, customerId, name, description, status, rate, balance, deposit },
          index
        ) => {
          // if balance is less than 0, remove negative
          const formatBalance =
            balance < 0 ? balance.toString().split("-")[1] : balance;

          return (
            <Flex
              alignItems="center"
              fontFamily="body"
              justifyContent="space-between"
              padding="15px 20px 10px 20px"
              fontSize="base"
              bgColor={index % 2 === 0 ? "brand.100" : undefined}
              color="text.default"
              key={id}
            >
              <Flex
                alignItems="flex-start"
                width="160px"
                flexDirection="column"
              >
                <Tooltip label={name}>
                  <Text variant="heading" className="truncate-two-lines">
                    {name}
                  </Text>
                </Tooltip>
                <Text variant="unit">{customerId}</Text>
              </Flex>
              <Tooltip label={description}>
                <Text
                  width="320px"
                  textAlign="left"
                  marginLeft="20px"
                  className="truncate-two-lines"
                >
                  {description}
                </Text>
              </Tooltip>
              <Box width="70px" textAlign="center">
                <Status variant={status?.toLowerCase()}>{status}</Status>
              </Box>
              <Flex
                width="100px"
                flexDirection="column"
                textAlign="right"
                marginLeft="20px"
              >
                <Text>${rate.toFixed(2)}</Text>
                <Text variant="unit">CAD</Text>
              </Flex>
              <Flex
                width="100px"
                flexDirection="column"
                textAlign="right"
                marginLeft="20px"
              >
                <Text color={balance < 0 ? "text.reversal" : "text.helper"}>
                  {balance < 0 && "-"}${Number(formatBalance).toFixed(2)}
                </Text>
                <Text variant="unit">CAD</Text>
              </Flex>
              <Flex
                width="100px"
                flexDirection="column"
                textAlign="right"
                marginLeft="20px"
              >
                <Text>${deposit.toFixed(2)}</Text>
                <Text variant="unit">CAD</Text>
              </Flex>
              <Box width="20px" textAlign="right">
                {!!id && renderAction(id)}
              </Box>
            </Flex>
          );
        }
      )
    ) : (
      <Text variant="not-found">{ERROR_MESSAGE.CUSTOMER_NOT_FOUND}</Text>
    );

  return (
    <>
      {renderHeader()}
      <Suspense fallback={renderIndicator()}>
        {isPending
          ? renderIndicator()
          : !!data?.pages &&
            data.pages?.length > 0 &&
            data.pages?.map((customers) => renderBody(customers))}
      </Suspense>
    </>
  );
};

export default CustomerTable;
