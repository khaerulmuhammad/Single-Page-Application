import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "username",
    text: "Username",
    sort: true,
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
  },
  {
    dataField: "experience",
    text: "Experience",
    headerStyle: () => {
      return { width: "10%" };
    },
    sort: true,
  },
  {
    dataField: "lvl",
    text: "Level",
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <Container>
          <div>
            <Link to={"detail/" + row.username}>
              <Button color="danger" className="mr-2">
                Detail
              </Button>
            </Link>

            <Link to={"edit/" + row.username}>
              <Button color="success" className="mr-2">
                Edit
              </Button>
            </Link>

            <Button color="primary" className="mr-2">
              Delete
            </Button>
          </div>
        </Container>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "username",
    order: "asc",
  },
];

const TableComponent = (props) => {
  return (
    <Container>
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={props.players}
        columns={columns}
        defaultSorted={defaultSorted}
        search
      >
        {(props) => (
          <div>
            <Row>
              <Col>
                <Link to={"create/"}>
                  <Button color="dark" className="mr-2">
                    Create Player
                  </Button>
                </Link>
              </Col>

              <Col>
                <SearchBar {...props.searchProps} />
              </Col>
            </Row>

            <hr />
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
            />
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
};

export default TableComponent;
