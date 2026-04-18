import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../components/bookDetails/BookDetails";
import PagesToRead from "../components/PageToRead/PageToRead";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/books",
        element: <Books></Books>,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/page-to-read",
        element: <PagesToRead></PagesToRead>,
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }, 
]);