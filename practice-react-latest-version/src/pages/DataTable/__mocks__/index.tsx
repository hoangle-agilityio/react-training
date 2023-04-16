// Libs
import React, {
  useEffect,
  useState,
  useTransition,
  Suspense,
  useMemo,
} from "react";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "react-query";

// Components
import Input from "components/Input";
import AddCustomerModal from "components/AddCustomerModal";
import ConfirmModal from "components/ConfirmModal";
import CustomerTable from "components/CustomerTable";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  CircularProgress,
  Flex,
  useToast,
} from "@chakra-ui/react";

// Constants
import { ACTION_TYPE, PAGE_LIMIT } from "constants/variables";
import { CUSTOMER_ENDPOINT } from "constants/endpoint";
import { SUCCESS_MESSAGE } from "constants/message";

// Types
import { Customer } from "types/customer";
import { WithID } from "types/common";

// Queries
import { deleteCustomer, fetchCustomers } from "services/customers";

// Utils
import { debounce } from "utils/utilities";

const App = () => {
  const [isFetchNextPage, setIsFetchNextPage] = useState(false);
  const [actionId, setActionId] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [order, setOrder] = useState("");
  const [isShowAddCustomerModal, setShowAddCustomerModal] = useState(false);
  const [isShowConfirmModal, setShowConfirmModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [isPending, startTransition] = useTransition();
  const queryClient = useQueryClient();
  const toast = useToast();

  // fetch customer's data with 20 records on 1 time
  let {
    data,
    isFetching: isLoadMore,
    hasNextPage,
    fetchNextPage,
  }: UseInfiniteQueryResult<WithID<Customer>[], Error> = useInfiniteQuery(
    [CUSTOMER_ENDPOINT, searchQuery, order],
    ({ pageParam = 1 }) =>
      fetchCustomers(pageParam, PAGE_LIMIT, searchQuery, order),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage, pages) => {
        const nextPage = pages.length + 1;

        return lastPage?.length > 0 && lastPage?.length === PAGE_LIMIT
          ? nextPage
          : undefined;
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

  // mock data for data table page
  data = {
    pages: [
      [
        {
          customerId: 5351202197,
          name: "Ahmad Rosser",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla",
          status: "Inactive",
          rate: 66,
          balance: 2560,
          deposit: 555,
          id: "2",
        },
        {
          customerId: 9095689304,
          name: "Leo Stanton",
          description: "description",
          status: "Due",
          rate: 0,
          balance: 242,
          deposit: 2411,
          id: "3",
        },
        {
          customerId: 2093666722,
          name: "Ryan Westervelt",
          description: "Ryan Westervelt",
          status: "Open",
          rate: 0,
          balance: 0,
          deposit: 0,
          id: "5",
        },
      ],
    ],
    pageParams: [null],
  };

  // delete customer's data
  const {
    mutate,
    isLoading,
  }: UseMutationResult<Customer[], Error, string, unknown> = useMutation(
    (id: string) => deleteCustomer(id),
    {
      onSuccess(_data, _error, id) {
        queryClient.removeQueries([CUSTOMER_ENDPOINT, id]);
        queryClient.refetchQueries(CUSTOMER_ENDPOINT);
        toast({
          position: "top",
          description: SUCCESS_MESSAGE.DELETE,
          status: "success",
          isClosable: true,
        });
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
    onToggleConfirmModal();
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

  // on toggle show/hide confirm modal
  const onToggleConfirmModal = () => {
    setShowConfirmModal((prevState) => !prevState);
  };

  // handle confirm delete customer
  const handleConfirmDelete = (id: string) => {
    onToggleConfirmModal();
    setCustomerId(id);
  };

  const renderIndicatorLoadMore = () => (
    <Box textAlign="center" bgColor="brand.100" paddingTop="10px">
      <CircularProgress isIndeterminate color="brand.300" size="30px" />
    </Box>
  );

  return (
    <>
      <Box width="full" bgColor="brand.200">
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
            icon={<SearchIcon color="text.secondary" />}
            value={searchInput}
            onChange={handleChangeSearch}
          />
          <Button
            variant="primary"
            width="146px"
            height="32px"
            onClick={() => handleOpenAddCustomerModal(ACTION_TYPE.ADD)}
          >
            + Add customer
          </Button>
        </Flex>
        <CustomerTable
          data={data}
          actionId={actionId}
          order={order}
          setActionId={setActionId}
          setOrder={setOrder}
          renderIndicator={renderIndicatorLoadMore}
          handleOpenModal={handleOpenAddCustomerModal}
          handleConfirmDelete={handleConfirmDelete}
        />
        {isLoadMore && !isPending && renderIndicatorLoadMore()}
        {isLoading && (
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
      </Box>
      <Suspense fallback={renderIndicatorLoadMore()}>
        {isShowAddCustomerModal && (
          <AddCustomerModal
            type={actionType}
            id={customerId}
            isOpen={isShowAddCustomerModal}
            onClose={onToggleAddCustomerModal}
          />
        )}
        {isShowConfirmModal && (
          <ConfirmModal
            isOpen={isShowConfirmModal}
            onClose={onToggleConfirmModal}
            onSubmit={() => handleDeleteCustomer(customerId)}
            title="Are you sure you want to delete?"
          />
        )}
      </Suspense>
    </>
  );
};

export default App;
