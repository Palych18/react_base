export type CommentDetails = {
  id: number;
  comment: string;
};

export type CommentProps = {
  details: CommentDetails;
  className?: string;
};
