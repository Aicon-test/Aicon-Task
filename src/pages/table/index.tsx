import AnimatedPage from '@/components/animatedPage';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { useMutation, useQuery} from 'react-query';
import { kotaService } from '@/service/kota';
import { KotaData, KotaSchema } from '@/types/kota';
import Layout from '@/components/layout';

const ListBrand = () => {
    const router = useRouter()
    const [popupAdd, setPopupAdd] = useState<boolean>(false);
    const [popupEdit, setPopupEdit] = useState<boolean>(false);
    const [selectedRow, setSelectedRow] = useState<string | null>(null);
    const [value, setValue] = useState("");
    const [rows, setRows] = useState<KotaData[]>([]);


    const query = useQuery({
        queryKey: ['/incentive_api/api/v1/dropdown_branch/'], queryFn: kotaService.getList, onSuccess: (data: any) => {
            if (data)
                setRows(data.data.data)
            console.log(data)
        }
    })

    const [dataEdit, setDataEdit] = useState<KotaData>();

  const handleAction = (data: KotaData, action: 'edit' | 'delete') => {
      if (action === 'edit') {
          setValue(data.value)
          setDataEdit(data)
          setSelectedRow(data.value);
      } else if (action === 'delete') {
          const updatedRows = rows.filter(row => row.value !== data.value);
          setRows(updatedRows);

      }
      
  };

    const columns: GridColDef[] = [
        { field: 'value', headerName: 'Value', width: 70, renderCell: (index) => index.api.getRowIndexRelativeToVisibleRows(index.row.value) + 1 },
        { field: 'text', headerName: 'Text', width: 130 },
        { field: 'value', headerName: 'Value', width: 130 },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            headerClassName: 'action',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            renderCell: (params) => (
                <Box display="flex">
                    <Button onClick={() => handleAction(params.row, 'edit')} className='bg-yellow-500 ml-auto p-2 rounded-xl'>
                        Edit
                    </Button>
                    <Button onClick={() => handleAction(params.row, 'delete')} className='bg-red-500 p-2 rounded-xl mx-5'>
                        Delete
                    </Button>
                </Box>
            ),
        },
    ];

    return (
        <>
            <Layout>
                <div className=" w-screen h-full">
                    <AnimatedPage>
                        <div className=" h-full w-full bg-white">
                            <div className="p-5 text-white flex flex-row justify-between ">
                                <h1 className="font-semibold text-lg text-black underline underline-offset-8">
                                    My Table
                                </h1>
                                <Button className='justify-between bg-green-500 p-3 rounded-xl'
                                    >
                                    Add Category
                                </Button>
                            </div>
                            <div style={{ width: '100%' }}>
                                <DataGrid
                                    className=' w-full'
                                    getRowId={(row) => row.value}
                                    rows={rows}
                                    columns={columns}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </AnimatedPage>
                </div>
            </Layout>
        </>
    );
};

export default ListBrand;
