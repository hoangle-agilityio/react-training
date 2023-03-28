// Libs
import React, {
  useEffect,
  useState,
  useTransition,
  Suspense,
  useMemo,
} from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  CircularProgress,
  Flex,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "react-query";

// Components
import Button from "components/Button";
import Input from "components/Input";
import Status from "components/Status";
import Dropdown from "components/Dropdown";
import Notification from "components/Notification";
import AddCustomerModal from "components/AddCustomerModal";

// Constants
import {
  ACTION_TYPE,
  customerDataTableHeader,
  PAGE_LIMIT,
  sortOrders,
  SORT_ORDER,
} from "constants/variables";
import { CUSTOMER_ENDPOINT } from "constants/endpoint";

// Types
import { Customer } from "types/customer";
import { StatusType, WithID } from "types/common";

// Queries
import { deleteData, fetchData } from "services/customers";
import { debounce } from "utils/utilities";

const App = () => {
  const [isFetchNextPage, setIsFetchNextPage] = useState(false);
  const [actionId, setActionId] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [order, setOrder] = useState("");
  const [isShowAddCustomerModal, setShowAddCustomerModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [isPending, startTransition] = useTransition();
  const queryClient = useQueryClient();

  // fetch customer's data with 20 records on 1 time
  const {
    data,
    isFetching: isLoadMore,
    error,
    isError,
    hasNextPage,
    fetchNextPage,
  }: UseInfiniteQueryResult<WithID<Customer>[], Error> = useInfiniteQuery(
    [CUSTOMER_ENDPOINT, searchQuery, order],
    ({ pageParam = 1 }) => fetchData(pageParam, PAGE_LIMIT, searchQuery, order),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage, pages) => {
        const nextPage = pages.length + 1;

        return lastPage?.length > 0 && lastPage?.length === PAGE_LIMIT
          ? nextPage
          : undefined;
      },
    }
  );

  // delete customer's data
  const {
    mutate,
    isError: isErrorDelete,
    error: errorDelete,
    isLoading,
  }: UseMutationResult<Customer[], Error, string, unknown> = useMutation(
    (id: string) => deleteData(id),
    {
      onSettled(_data, _error, id) {
        queryClient.removeQueries([CUSTOMER_ENDPOINT, id]);
        queryClient.refetchQueries(CUSTOMER_ENDPOINT);
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

  // handle delete customer
  const handleDeleteCustomer = (id: string) => {
    mutate(id);
    setActionId("");
  };

  // handle delayed search query
  const delayedQuery = useMemo(
    () =>
      debounce(
        (value: string) =>
          startTransition(() => {
            setSearchQuery(value);
          }),
        1000
      ),
    [setSearchQuery]
  );

  // handle change search
  const handleChangeSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setSearchInput(value);
    delayedQuery(value?.trim());
  };

  // handle sort by name
  const handleSortByName = () => {
    // find current index in list of sort order
    const findIndex = sortOrders.findIndex((data) => data === order);

    // calculate next index based on find index
    const nextIndex = findIndex === sortOrders.length - 1 ? 0 : findIndex + 1;

    startTransition(() => {
      setOrder(sortOrders[nextIndex]);
    });
  };

  // on toggle show/hide add customer modal
  const onToggleAddCustomerModal = () => {
    setShowAddCustomerModal((prevState) => !prevState);
  };

  // handle open add customer modal
  const handleOpenAddCustomerModal = (type: string, id?: string) => {
    setActionType(type);
    id && setCustomerId(id);
    onToggleAddCustomerModal();
  };

  const renderHeader = () => {
    const srcImage = `/icons/${
      order === SORT_ORDER.NONE
        ? "column-sorting-none.svg"
        : order === SORT_ORDER.SORT_ASC
        ? "column-sorting-asc.svg"
        : "column-sorting-desc.svg"
    }`;

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
          <Image src={srcImage} />
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
        onClick={() => handleDeleteCustomer(id)}
      />
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
              bgColor={index % 2 === 0 ? "white.100" : undefined}
              color="gray.600"
              key={id}
            >
              <Flex
                alignItems="flex-start"
                width="160px"
                flexDirection="column"
              >
                <Tooltip label={name}>
                  <Text
                    fontFamily="medium"
                    color="gray.700"
                    className="truncate-two-lines"
                  >
                    {name}
                  </Text>
                </Tooltip>
                <Text color="gray.400">{customerId}</Text>
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
                {!!id && renderAction(id)}
              </Box>
            </Flex>
          );
        }
      )
    ) : (
      <Text
        color="gray.600"
        fontSize="base"
        fontFamily="body"
        bgColor="white.100"
        textAlign="center"
        padding="20px"
      >
        Customer not found.
      </Text>
    );

  const renderIndicatorLoadMore = () => (
    <Box textAlign="center" bgColor="white.100" paddingTop="10px">
      <CircularProgress isIndeterminate color="gray.300" size="30px" />
    </Box>
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
            value={searchInput}
            onChange={handleChangeSearch}
          />
          <Button
            label="+ Add customer"
            styles={{
              width: "146px",
              height: "32px",
            }}
            onClick={() => handleOpenAddCustomerModal(ACTION_TYPE.ADD)}
          />
        </Flex>
        {(isError || isErrorDelete) && (
          <Notification
            message={error?.message || errorDelete?.message || ""}
            type="error"
          />
        )}
        {renderHeader()}
        <Suspense fallback={renderIndicatorLoadMore()}>
          {isPending
            ? renderIndicatorLoadMore()
            : !!data?.pages &&
              data.pages?.length > 0 &&
              data.pages?.map((customers) => renderBody(customers))}
        </Suspense>
        {isLoadMore && !isPending && renderIndicatorLoadMore()}
        {isLoading && (
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
      </Box>
      {isShowAddCustomerModal && (
        <AddCustomerModal
          type={actionType}
          id={customerId}
          isOpen={isShowAddCustomerModal}
          onClose={onToggleAddCustomerModal}
        />
      )}
    </>
  );
};

export default App;
