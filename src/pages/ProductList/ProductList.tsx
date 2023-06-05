import React, { useEffect, useState } from 'react'
import TopBar from '../../components/TopBar/TopBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { DeleteOutline } from '@mui/icons-material'
import { productRows } from '../../dummyData'
import "./ProductList.scss"

const ProductList = () => {
    const [products, setProducts] = useState<any []>([])

    useEffect(() => {
        setProducts(productRows)
    },[])

    const handleDelete = (id: any) => {
        console.log("Delete")
    };
    console.log(products)

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 220 },
        {
          field: "name",
          headerName: "Product",
          width: 300,
          renderCell: (params: any) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: "stock", headerName: "Stock", width: 150 },
       
        {
          field: "price",
          headerName: "Price",
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params: any) => {
            return (
              <>
                <Link to={"/product/" + params.row._id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
      ];

  return (
    <>
      <TopBar />
      <div className="container">
        <Sidebar />
        <div className="productList">
            <Link to="/newproduct">
                <button className="addProductButton">Create new product</button>
            </Link>
            <DataGrid
                rows={products && products}
                columns={columns}
                getRowId={(row)=>row.id}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
        </div>
    </>
  )
}

export default ProductList