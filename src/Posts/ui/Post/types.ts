export type PostDetails = {
  id: number;
  title: string;
  content: string;
  status: string;
  category: string;
};

export type PostProps = {
  className?: string;
  details: PostDetails;
};
