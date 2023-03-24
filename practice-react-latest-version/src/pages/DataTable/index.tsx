// Libs
import React, { useEffect, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, CircularProgress, Flex, Image, Text } from "@chakra-ui/react";
import { useInfiniteQuery, UseInfiniteQueryResult } from "react-query";

// Components
import Button from "components/Button";
import Input from "components/Input";
import Status from "components/Status";
import Dropdown from "components/Dropdown";

// Constants
import { customerDataTableHeader, PAGE_LIMIT } from "constants/variables";

// Types
import { Customer } from "types/customer";
import { StatusType } from "types/common";

// Queries
import { getCustomers } from "services/APIs";
import Notifications from "components/Notification";

const App = () => {
  const [isFetchNextPage, setIsFetchNextPage] = useState(false);

  const {
    data,
    isLoading,
    error,
    isError,
    hasNextPage,
    fetchNextPage,
  }: UseInfiniteQueryResult<Customer[], Error> = useInfiniteQuery(
    "customers",
    ({ pageParam = 1 }) => getCustomers(pageParam, PAGE_LIMIT),
    {
      staleTime: 100000,
      getNextPageParam: (lastPage, pages) => {
        const nextPage = pages.length + 1;

        return lastPage.length > 0 ? nextPage : undefined;
      },
    }
  );

  useEffect(() => {
    // if has the next page and data is not full screen, call API with next page
    if (hasNextPage && document.body.clientHeight <= window.innerHeight) {
      (async () => {
        await fetchNextPage();
        setIsFetchNextPage((prevState) => !prevState);
      })();
    }
  }, [hasNextPage, isFetchNextPage, fetchNextPage]);

  useEffect(() => {
    let isFetching = false;
    const onScroll = async (event: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      // if data is not fetching and has the next page and scroll to bottom, call API with next page
      if (
        !isFetching &&
        hasNextPage &&
        scrollHeight - scrollTop <= clientHeight * 1.5
      ) {
        isFetching = true;
        await fetchNextPage();
        isFetching = false;
      }
    };

    // set event scroll
    document.addEventListener("scroll", onScroll);
    return () => {
      // remove event scroll
      document.removeEventListener("scroll", onScroll);
    };
  }, [hasNextPage, fetchNextPage]);

  const renderHeader = () => (
    <Flex
      alignItems="center"
      fontFamily="heading"
      justifyContent="space-between"
      padding="12px 20px"
      fontSize="base"
    >
      <Flex alignItems="center" width="160px">
        <Text>Name</Text>
        <Image src="/icons/column-sorting-none.svg" />
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

  const renderAction = () => (
    <Dropdown
      renderMenu={() => <Text fontSize="lg">&#x22EF;</Text>}
      stylesOption={{ width: "120px" }}
    >
      <Button
        label="View"
        type="text"
        styles={{
          _hover: {
            bgColor: "gray.200",
          },
          width: "full",
          justifyContent: "space-between",
          borderRadius: "0",
          color: "blue.300",
        }}
        rightIcon={<Image src="/icons/info.svg" />}
      />
      <Button
        label="Edit"
        type="text"
        styles={{
          _hover: {
            bgColor: "gray.200",
          },
          width: "full",
          justifyContent: "space-between",
          borderRadius: "0",
          color: "blue.300",
        }}
        rightIcon={<Image src="/icons/pencil-filed.svg" />}
      />
      <Button
        label="Delete"
        type="text"
        styles={{
          _hover: {
            bgColor: "gray.200",
          },
          width: "full",
          justifyContent: "space-between",
          borderRadius: "0",
          color: "red.200",
        }}
        rightIcon={<Image src="/icons/trash-filled.svg" />}
      />
    </Dropdown>
  );

  const renderBody = (customers: Customer[]) =>
    customers?.length > 0 &&
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
            bgColor={index % 2 === 0 ? "white.100" : undefined}
            color="gray.600"
            key={id}
          >
            <Flex alignItems="flex-start" width="160px" flexDirection="column">
              <Text fontFamily="medium" color="gray.700">
                {name}
              </Text>
              <Text color="gray.400">{customerId}</Text>
            </Flex>
            <Text width="320px" textAlign="left" marginLeft="20px">
              {description}
            </Text>
            <Box width="70px" textAlign="center">
              <Status type={status as StatusType} />
            </Box>
            <Flex
              width="100px"
              flexDirection="column"
              textAlign="right"
              marginLeft="20px"
            >
              <Text>${rate.toFixed(2)}</Text>
              <Text color="gray.400">CAD</Text>
            </Flex>
            <Flex
              width="100px"
              flexDirection="column"
              textAlign="right"
              marginLeft="20px"
            >
              <Text color={balance < 0 ? "red.200" : "green.200"}>
                {balance < 0 && "-"}${Number(formatBalance).toFixed(2)}
              </Text>
              <Text color="gray.400">CAD</Text>
            </Flex>
            <Flex
              width="100px"
              flexDirection="column"
              textAlign="right"
              marginLeft="20px"
            >
              <Text>${deposit.toFixed(2)}</Text>
              <Text color="gray.400">CAD</Text>
            </Flex>
            <Box width="20px" textAlign="right">
              {renderAction()}
            </Box>
          </Flex>
        );
      }
    );

  return (
    <>
      <Box width="full" bgColor="gray.100">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          padding="15px 20px"
        >
          <Input
            placeholder="Search..."
            name="search"
            styles={{
              wrapper: {
                width: "320px",
              },
              inputWrap: {
                height: "32px",
              },
            }}
            icon={<SearchIcon color="gray.400" />}
          />
          <Button
            label="+ Add customer"
            styles={{
              width: "146px",
              height: "32px",
            }}
          />
        </Flex>
        {isError && <Notifications message={error.message} type="error" />}
        {renderHeader()}
        {!!data?.pages &&
          data.pages?.length > 0 &&
          data.pages?.map((customers) => renderBody(customers))}
        {isLoading && (
          <Box textAlign="center" bgColor="white.100" paddingTop="10px">
            <CircularProgress isIndeterminate color="gray.300" size="30px" />
          </Box>
        )}
      </Box>
    </>
  );
};

export default App;
