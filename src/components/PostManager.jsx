import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack,
  Center,
} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";

function PostManager() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");

  const handleDraftPost = (e) => {
    e.preventDefault();

    // Check if title, description, and schedule date are provided
    if (!title.trim() || !description.trim() || !scheduleDate.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const newPost = {
      title,
      description,
      scheduleDate,
    };

    setPosts([...posts, newPost]);

    // Clear form fields after drafting the post
    setTitle("");
    setDescription("");
    setScheduleDate("");
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  return (
    <Center>
      <Box width="30%" padding="4">
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Schedule Date</FormLabel>
            <Input
              type="datetime-local"
              value={scheduleDate}
              onChange={(e) => setScheduleDate(e.target.value)}
            />
          </FormControl>
          <Button onClick={handleDraftPost}>Draft & Schedule</Button>

          <Card>
            <div>
              <h2>Scheduled Posts</h2>
              <ul>
                {posts.map((post, index) => (
                  <li key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>Scheduled for: {post.scheduleDate}</p>
                    <Button onClick={() => handleDeletePost(index)}>
                      Delete
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Stack>
      </Box>
    </Center>
  );
}

export default PostManager;
