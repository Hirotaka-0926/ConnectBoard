export interface Thread {
  id: string;
  title: string;
}

interface Post {
  id: string;
  post: string;
}

export interface Posts {
  threadId: string;
  posts: Post[];
}
