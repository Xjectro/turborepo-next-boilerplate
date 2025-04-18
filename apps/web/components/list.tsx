"use client";

import React from "react";

import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "@repo/utils/services/api";
import {
  Separator,
  Input,
  Button,
  Skeleton,
  List as ListComponent,
} from "@repo/ui/components";

export function List() {
  const [title, setTitle] = React.useState("");

  const { data: posts = [], isLoading: isGettingPosts } = useGetPostsQuery({
    limit: 5,
    offset: 0,
  });

  const [createPostMutation, { isLoading: isCreatingPost }] =
    useCreatePostMutation();

  return (
    <div className="flex flex-col gap-y-10">
      <Input
        onChange={(v) => setTitle(v.target.value)}
        placeholder="Hello !!"
      />
      <Button size="lg" onClick={() => createPostMutation({ title })}>
        {isCreatingPost ? "Creating..." : "Create Post"}
      </Button>
      <Separator />
      {isGettingPosts ? (
        <Skeleton className="size-46" />
      ) : (
        <ul>
          <ListComponent
            items={posts}
            keyExtractor={(item) => item.id}
            renderItem={(post) => <li key={post.id}>{post.title}</li>}
          />
        </ul>
      )}
    </div>
  );
}
