import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/header/Navbar";
import Sidebar from "./components/aside/Sidebar";
import Dashboardclient from "./components/main/Dashboardclient";
import Transaction from "./components/main/Transaction/transaction";
import DataFetching from "./interview/apicall";
import PostForm from "./interview/postname";
import Formvalidation from "./interview/formvalidation";
import Table from "./interview/table";
import Form from "./practice/formAgain";
import Parent from "./interview/propsexample";
function App() {
  
  return(
    <>
      {/* <Navbar />
      <Sidebar/>
      <Dashboardclient/> */}
    {/* <DataFetching /> */}
     {/* <PostForm /> */}
      {/* <Formvalidation /> */}
      {/* <Table /> */}
      {/* <Form/> */}
      <Parent/>
    </>
  );
}

export default App;
