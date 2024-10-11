import { FC } from "react";

interface ReviewDialogProps {
  review: string | null;
}

const ReviewDialog: FC<ReviewDialogProps> = ({ review }) => {
  return (
    <div className="w-screen h-screen bg-slate-600 backdrop-blur-sm bg-opacity-30 fixed top-0 right-0 z-50 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 text-xl text-white font-bold bg-black p-8 bg-opacity-50 rounded-lg">
        {review}
      </div>
    </div>
  );
};

export default ReviewDialog;