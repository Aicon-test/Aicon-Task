import AnimatedPage from '@/components/animatedPage';
import TextField from '@mui/material/TextField';
import LayoutAdmin from '@/components/layout';
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Button, ButtonGroup, Checkbox, FormControl, FormControlLabel, InputLabel, ListItem, ListItemIcon, ListItemText, MenuItem, Pagination, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { CheckBox } from '@mui/icons-material';

const ListBrand = () => {

    const style1 = {
        width: '100%',
        maxWidth: 250,
        bgcolor: "#f44336",
    };
    const style2 = {
        width: '100%',
        maxWidth: 250,
        bgcolor: "#3f51b5",
    };
    const style3 = {
        width: '100%',
        maxWidth: 250,
        bgcolor: "#4caf50",
    };
    const style4 = {
        width: '100%',
        maxWidth: 250,
        bgcolor: "#ff9800",
    };

    const staticOptions = [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5',
    ];

    const years = Array.from({ length: 9 }, (_, index) => 2017 + index);

    const yearOptions = years.map((year) => ({ label: year.toString(), year }));

    const label = {
        style: { color: "#4299e1" },
    };


    return (
        <>
            <LayoutAdmin>
                <div className="w-full">
                    <AnimatedPage>
                        <div className=" w-full bg-sky-100 rounded-lg">
                            <div className="p-3 text-white flex flex-row justify-between ">
                                <h1 className="font-semibold text-lg text-sky-700 ">
                                    Report Detail
                                </h1>
                            </div>
                            <div className='w-full flex flex-row'>
                                <div className='flex flex-col w-1/3'>
                                    <div className="mb-4">
                                        <TextField
                                            label="Search"
                                            size='small'
                                            variant="outlined"
                                            fullWidth
                                            className='w-48 bg-white mx-3  rounded-xl'
                                        />
                                    </div>
                                    <div className='flex flex-row mx-3 gap-x-3'>
                                        <Button variant="contained" className='bg-sky-700'>PAGES</Button>
                                        <Button variant="contained" className='bg-sky-700'>RESULTS</Button>
                                    </div>
                                    <div className='my-2 mx-3 gap-y-2'>
                                        <Accordion sx={style1}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <ListItemIcon>
                                                    <Icon icon="icon-park-outline:general-branch" color="white" />
                                                </ListItemIcon>
                                                <Typography className='text-white'>
                                                    GENERAL
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion sx={style2}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                className='my-3'
                                            >
                                                <ListItemIcon>
                                                    <Icon icon="streamline:decent-work-and-economic-growth-solid" color="white" />
                                                </ListItemIcon>
                                                <Typography>ECONOMICS</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion sx={style3}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                className='my-3'
                                            >
                                                <ListItemIcon>
                                                    <Icon icon="mdi:recycle" color="white" />
                                                </ListItemIcon>
                                                <Typography>ENVIRONMENT</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion sx={style4}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                className='my-3'
                                            >
                                                <ListItemIcon>
                                                    <Icon icon="clarity:users-line" color="white" />
                                                </ListItemIcon>
                                                <Typography>SOCIALS</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                </div>
                                <div className='w-2/3 mx-3'>
                                    <div className='w-full'>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-sky-700 flex flex-row gap-x-3'>
                                                <h1>
                                                    standard
                                                </h1>
                                                <Autocomplete
                                                    id="country-select-demo"
                                                    sx={{ width: 100 }}
                                                    options={staticOptions}
                                                    size='small'
                                                    autoHighlight
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            label="option"
                                                            className='bg-white'
                                                            inputProps={{
                                                                ...params.inputProps,
                                                                autoComplete: 'new-password',
                                                            }}
                                                        />
                                                    )}
                                                />
                                            </div>
                                            <div className=' flex flex-row gap-x-3 mx-5'>
                                                <h1 className='text-sky-700'>
                                                    View Report as
                                                </h1>
                                                <Autocomplete
                                                    id="country-select-demo"
                                                    sx={{ width: 100 }}
                                                    options={staticOptions}
                                                    size='small'
                                                    autoHighlight
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            className='bg-white'
                                                            label="Kantor Pusat"
                                                            inputProps={{
                                                                ...params.inputProps,
                                                                autoComplete: 'new-password',
                                                            }}
                                                        />
                                                    )}
                                                />
                                                <Autocomplete
                                                    id="country-select-demo"
                                                    sx={{ width: 100 }}
                                                    options={staticOptions}
                                                    size='small'
                                                    autoHighlight
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            label="Kantor Pusat"
                                                            className='bg-white'
                                                            inputProps={{
                                                                ...params.inputProps,
                                                                autoComplete: 'new-password',
                                                            }}
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full rounded-xl bg-green-600 my-2'>
                                        <div className='p-3 grid grid-cols-3'>
                                            <div className='flex flex-col'>
                                                <div className='text-center'>
                                                    <h1>GRI - 300</h1>
                                                    <h1>ENVIRONMENT</h1>
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <div className='text-center'>
                                                    <h1>GRI - 302 Energi</h1>
                                                    <h1>GRI - 302 - 1 Penggunaan Energi Dalam Organisasi</h1>
                                                    <h1>GRI - 302 - 1 (*)</h1>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-end justify-end space-x-2'>
                                                <button className='bg-gray-400 text-white px-4 py-2 rounded'>Export</button>
                                                <button className='bg-gray-400 text-white px-4 py-2 rounded'>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-row gap-x-3 '>
                                        <div className='w-1/3 bg-white  border-t-blue-500'>
                                            <div className='flex flex-row justify-center p-3 gap-x-3'>
                                                <h1 className='text-sky-700'>Years</h1>
                                                <Autocomplete
                                                    disablePortal
                                                    id="combo-box-demo"
                                                    options={yearOptions}
                                                    size='small'
                                                    getOptionLabel={(option) => option.label}
                                                    sx={{ width: 100 }}
                                                    renderInput={(params) => <TextField {...params} label="Year" />}
                                                />
                                            </div>
                                            <div className='flex justify-center'>
                                                <FormControlLabel
                                                    control={<Checkbox defaultChecked />}
                                                    label="Show Annual Data"
                                                    {...label}
                                                />
                                            </div>
                                        </div>
                                        <div className='w-2/3 gap-x-5 bg-white'>
                                            <h1 className='text-sky-700 p-3'>Periode</h1>
                                            <div className='flex justify-center'>
                                                <Stack spacing={2}>
                                                <Pagination count={10} variant="outlined" />
                                                </Stack>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full bg-white my-2'>
                                        <div className='p-8 flex justify-between'>
                                            <h1 className='text-sky-700 font-semibold'>Penggunaan Energi Dalam Organisasi</h1>
                                            <div className='flex flex-row items-end justify-end space-x-2'>
                                                <button className='bg-sky-700 text-white px-4 py-2 rounded'>Export</button>
                                                <button className='bg-sky-700 text-white px-4 py-2 rounded'>Save</button>
                                            </div>
                                        </div>
                                        <div className='p-8'>
                                            <TableContainer component={Paper}>
                                                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell sx={{
                                                                backgroundColor: "#AAE5FF"
                                                            }}  rowSpan={3}>Deskripsi</TableCell>
                                                            <TableCell sx={{
                                                                backgroundColor: "#AAE5FF"
                                                            }}  rowSpan={3}>UGM</TableCell>
                                                            <TableCell sx={{
                                                                backgroundColor: "#AAE5FF"
                                                            }} align="center" colSpan={3}>
                                                                Jumlah
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell sx={{
                                                                backgroundColor: "#3CA8DA"
                                                            }} >2021</TableCell>
                                                            <TableCell sx={{
                                                                backgroundColor: "#3CA8DA"
                                                            }} >2020</TableCell>
                                                            <TableCell sx={{
                                                                backgroundColor: "#3CA8DA"
                                                            }} >2019</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell sx={{
                                                                backgroundColor: "#054E6F"
                                                            }} >Total</TableCell>
                                                            <TableCell sx={{
                                                                backgroundColor: "#054E6F"
                                                            }} >Total</TableCell>
                                                            <TableCell sx={{
                                                                backgroundColor: "#054E6F"
                                                            }} >Total</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                            <TableRow >
                                                                <TableCell>Air</TableCell>
                                                                <TableCell>Joule</TableCell>
                                                                <TableCell align="right">1.109</TableCell>
                                                                <TableCell align="right">2.380</TableCell>
                                                                <TableCell align="right">2.490</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                <TableCell>Listrik</TableCell>
                                                                <TableCell>Joule</TableCell>
                                                                <TableCell align="right">1.109</TableCell>
                                                                <TableCell align="right">2.380</TableCell>
                                                                <TableCell align="right">2.490</TableCell>
                                                            </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </AnimatedPage>
                </div>
            </LayoutAdmin>
        </>
    );
};

export default ListBrand;
