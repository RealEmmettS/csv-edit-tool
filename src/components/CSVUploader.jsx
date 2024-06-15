import React, { useState } from 'react';
import { Box, Heading, Button, Input, Table, Thead, Tbody, Tr, Th, Td, IconButton, useToast } from '@chakra-ui/react';
import { FaTrash, FaDownload } from 'react-icons/fa';
import Papa from 'papaparse';

const CSVUploader = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const toast = useToast();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        setHeaders(result.data[0]);
        setData(result.data.slice(1));
        toast({
          title: "File uploaded successfully.",
          description: `Parsed ${result.data.length - 1} rows.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      },
      header: false,
    });
  };

  const handleAddRow = () => {
    setData([...data, Array(headers.length).fill('')]);
  };

  const handleRemoveRow = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleCellChange = (rowIndex, colIndex, value) => {
    const newData = data.map((row, i) => (i === rowIndex ? row.map((cell, j) => (j === colIndex ? value : cell)) : row));
    setData(newData);
  };

  const handleDownload = () => {
    const csv = Papa.unparse([headers, ...data]);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'edited_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box p={4} boxShadow="md" borderRadius="md" bg="white">
      <Heading as="h2" size="lg" mb={4}>CSV Upload and Edit Tool</Heading>
      <Input type="file" accept=".csv" onChange={handleFileUpload} mb={4} />
      <Button onClick={handleAddRow} mb={4}>Add Row</Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <Td key={colIndex}>
                  <Input value={cell} onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)} />
                </Td>
              ))}
              <Td>
                <IconButton aria-label="Remove row" icon={<FaTrash />} onClick={() => handleRemoveRow(rowIndex)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Button onClick={handleDownload} mt={4} leftIcon={<FaDownload />}>Download CSV</Button>
    </Box>
  );
};

export default CSVUploader;