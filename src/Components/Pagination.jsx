import React from "react";
import {Flex, Spacer } from "@chakra-ui/react";
import {
  Previous,
  Paginator,
  PageGroup,
  Page,
  Next,
  generatePages,
} from "chakra-paginator";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
const Pagination = ({handlePageChange,pagesQuantity}) => {

    const normalStyles = {
        bg: 'white'
      };
    
      const activeStyles = {
        bg: 'blue.300'
      };

  return (
    <div>
      <Flex p={2}>
        <Spacer />
        <Paginator
          onPageChange={handlePageChange}
          pagesQuantity={pagesQuantity - 1}
        >
          <Previous bg="white">
            <CgChevronLeft />
          </Previous>
          <PageGroup>
            {generatePages(pagesQuantity)?.map((page) => (
              <Page
                key={`paginator_page_${page}`}
                page={page}
                normalStyles={normalStyles}
                activeStyles={activeStyles}
              />
            ))}
          </PageGroup>
          <Next bg="white">
            <CgChevronRight />
          </Next>
        </Paginator>
      </Flex>
    </div>
  );
};

export default Pagination;
