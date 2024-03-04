import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Avatar, Heading, Text, IconButton, Image, Button } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import "./Post.css"
function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://65e5fdafd7f0758a76e7e7f0.mockapi.io/MiniSocialMedia');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="socialPost">
      {posts.map((post) => (
        <Card key={post.id} className="postContainer">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name={post.nmae} src={post.avatar} />
                <Box>
                  <Heading size="sm">{post.name}</Heading>
                  {/* <Text>{post.role}</Text> */}
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>{post.content}</Text>
          </CardBody>
          <Image
            objectFit="cover"
            src={post.image}
            alt="Chakra UI"
          />

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Button flex="1" variant="ghost" leftIcon={<FcLike />}>
            {post.likes || 0} Likes 
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<FaRegComment />} onClick={toggleComments}>
              {showComments ? "Hide Comments" : "View Comments"}
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<FaShare />}>
            {post.shares || 0} Shares
            </Button>
          </CardFooter>
          {showComments && (
            <Box p="4">
              <Heading size="sm">Comments</Heading>
              <Text>{post.comments}</Text>
            </Box>
          )}
        </Card>
      ))}
    </div>
  );
}

export default Posts;
