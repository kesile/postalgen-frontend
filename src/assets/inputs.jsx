import React, { useRef, useState } from 'react';
import { Stack, Input, Button, RadioGroup, Radio } from '@chakra-ui/react';

const Inputs = () => {
  const [inputValues, setInputValues] = useState({});
  const [campaignType, setCampaignType] = useState('campaign'); // Default to 'campaign'
  const [platformType, setPlatformType] = useState('linkedin'); // Default to 'linkedin'
  const inputRefs = useRef([]);

  const handleKeyPress = (event, index) => {
    if (event.key === 'Enter') {
      const nextIndex = index + 1;
      if (inputRefs.current[nextIndex]) {
        inputRefs.current[nextIndex].focus();
      }
    }
  };

  const handleInputChange = (event, inputKey) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputKey]: event.target.value,
    }));
  };  

  const handleCampaignTypeChange = (value) => {
    setCampaignType(value);
  };

  const handlePlatformTypeChange = (value) => {
    setPlatformType(value);
  };

  const handleButtonClick = () => {
    const dataToSend = {
      ...inputValues,
      campaignType: campaignType,
      platformType: platformType,
    };
  
    fetch('http://127.0.0.1:5000/api/save-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from server:', data);
        // Update the state with the response data
        setResponseData([data]);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors if any
      });
  };
  

  return (
    <Stack spacing={2} bg="brand.100" h = "70vh">
    <RadioGroup defaultValue="campaign" onChange={handleCampaignTypeChange}>
        <Stack direction="row">
          <Radio value="campaign" colorScheme = "whiteAlpha">Campaign</Radio>
          <Radio value="single_post" colorScheme = "whiteAlpha">Single Post</Radio>
        </Stack>
      </RadioGroup>
      <Input
        ref={(el) => (inputRefs.current[0] = el)}
        placeholder='Name?'
        size='sm'
        bg="brand.200"
        color="brand.400"
        border="0px"
        data-testid="input-name"
        onKeyPress={(e) => handleKeyPress(e, 0)}
        onChange={(e) => handleInputChange(e, 'Name')}
      />
      <Input
        ref={(el) => (inputRefs.current[0] = el)}
        placeholder='Description?'
        size='sm'
        bg="brand.200"
        color="brand.400"
        border="0px"
        data-testid="input-desc"
        onKeyPress={(e) => handleKeyPress(e, 0)}
        onChange={(e) => handleInputChange(e, 'Name')}
      />
      <Input
        ref={(el) => (inputRefs.current[0] = el)}
        placeholder='Industry?'
        size='sm'
        bg="brand.200"
        color="brand.400"
        border="0px"
        data-testid="input-industry"
        onKeyPress={(e) => handleKeyPress(e, 0)}
        onChange={(e) => handleInputChange(e, 'Name')}
      />
      <Input
        ref={(el) => (inputRefs.current[0] = el)}
        placeholder='Subject?'
        size='sm'
        bg="brand.200"
        color="brand.400"
        border="0px"
        data-testid="input-subject"
        onKeyPress={(e) => handleKeyPress(e, 0)}
        onChange={(e) => handleInputChange(e, 'Name')}
      />
      <Input
        ref={(el) => (inputRefs.current[0] = el)}
        placeholder='Details?'
        size='sm'
        bg="brand.200"
        color="brand.400"
        border="0px"
        data-testid="input-details"
        onKeyPress={(e) => handleKeyPress(e, 0)}
        onChange={(e) => handleInputChange(e, 'Name')}
      />
      <Input
        ref={(el) => (inputRefs.current[0] = el)}
        placeholder='Platform?'
        size='sm'
        bg="brand.200"
        color="brand.400"
        border="0px"
        data-testid="input-platform"
        onKeyPress={(e) => handleKeyPress(e, 0)}
        onChange={(e) => handleInputChange(e, 'Name')}
      />
      <Input
        ref={(el) => (inputRefs.current[0] = el)}
        placeholder='Tone?'
        size='sm'
        bg="brand.200"
        color="brand.400"
        border="0px"
        data-testid="input-tone"
        onKeyPress={(e) => handleKeyPress(e, 0)}
        onChange={(e) => handleInputChange(e, 'Name')}
      />
      <Input
        ref={(el) => (inputRefs.current[0] = el)}
        placeholder='Target Audience?'
        size='sm'
        bg="brand.200"
        color="brand.400"
        border="0px"
        data-testid="input-target"
        onKeyPress={(e) => handleKeyPress(e, 0)}
        onChange={(e) => handleInputChange(e, 'Name')}
      />
      <Input
        ref={(el) => (inputRefs.current[0] = el)}
        placeholder='Brand Personality?'
        size='sm'
        bg="brand.200"
        color="brand.400"
        border="0px"
        data-testid="input-personality"
        onKeyPress={(e) => handleKeyPress(e, 0)}
        onChange={(e) => handleInputChange(e, 'Name')}
      />
      <Input
        ref={(el) => (inputRefs.current[0] = el)}
        placeholder='CTA?'
        size='sm'
        bg="brand.200"
        color="brand.400"
        border="0px"
        data-testid="input-cta"
        onKeyPress={(e) => handleKeyPress(e, 0)}
        onChange={(e) => handleInputChange(e, 'Name')}
      />
      <Input
        ref={(el) => (inputRefs.current[0] = el)}
        placeholder='Length?'
        size='sm'
        bg="brand.200"
        color="brand.400"
        border="0px"
        data-testid="input-length"
        onKeyPress={(e) => handleKeyPress(e, 0)}
        onChange={(e) => handleInputChange(e, 'Name')}
      />
      <Input
        ref={(el) => (inputRefs.current[0] = el)}
        placeholder='Unique Advantage?'
        size='sm'
        bg="brand.200"
        color="brand.400"
        border="0px"
        data-testid="input-unique"
        onKeyPress={(e) => handleKeyPress(e, 0)}
        onChange={(e) => handleInputChange(e, 'Name')}
      />
    <RadioGroup defaultValue="linkedin" onChange={handlePlatformTypeChange}>
        <Stack direction="row">
          <Radio value="linkedin" colorScheme = "whiteAlpha">LinkedIn</Radio>
          <Radio value="instagram" colorScheme = "whiteAlpha">Instagram</Radio>
        </Stack>
      </RadioGroup>
      <Button bg = "brand.300" color = "brand.400" onClick={handleButtonClick}>Submit</Button>
    </Stack>
  );
};

export default Inputs;
