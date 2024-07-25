import React from "react";
import styled from "styled-components";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-align: left;
  padding-left: 10px;
`;
const Box = styled.div`
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  gap: 15px;
  flex-wrap: wrap;
  display: flex;
`;
const Post = styled.div`
  background-color: #1f2a40;
  border-radius: 5px;
  /* text-align:center;
  padding: 5px;
  width: 250px;
  overflow:hidden;
  height: 275px;
  max-height: 100%;*/

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 300px;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  overflow: hidden;
`;

const Img = styled.img`
  width: 175px;
  margin-top: 5px;
  height: full;
  border-radius:5px;
`;
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: left;
  padding-left: 10px;
`;


const Paragraph = styled.div`
  color: #4cceac;
  margin-top:10px;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  word-wrap: break-word;
`;

const ButtonContainer = styled.div`
  display: flex;
  color: #ffffff; /* White text color */
  align-items: center;
  justify-content: space-around; /* Adjust space between buttons */
  gap: 20px; /* Space between buttons */
  padding: 10px;
  border-radius: 5px;
`

const ButtonGreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none; /* No underline on the text */
  font-size: 16px;
  background-color:green;
  height: 35px;
  width: 100px;
  border-radius:5px;
  cursor:pointer;

`
const ButtonRed = styled.div`
  display: flex;
  justify-content: center;

  background-color:red;
  height: 35px;
  width: 100px;
  border-radius:5px;
  cursor:pointer;
  align-items: center;
  text-decoration: none; /* No underline on the text */
  font-size: 16px;

`

const index = () => {
  return (
    <>
      <Heading>Manage Post</Heading>
      <Box>
        <Post>
          <Img src="../../assets/images.jpeg" />
          <Title>Post Title</Title>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            sit commodi natus in eligendi? Sapiente dolore architecto
            reprehenderit inventore maiores eum omnis ad, laboriosam facere est
            illum voluptatum possimus reiciendis?
          </Paragraph>
          <ButtonContainer>
          <ButtonGreen><EditIcon/> Edit</ButtonGreen>
          <ButtonRed><DeleteIcon/> Delete</ButtonRed>
          </ButtonContainer>
            
        </Post>
        <Post>Post 1</Post>
        <Post>Post 1</Post>
        <Post>Post 1</Post>
        <Post>Post 1</Post>
        <Post>Post 1</Post>
        <Post>Post 1</Post>
      </Box>
    </>
  );
};

export default index;
