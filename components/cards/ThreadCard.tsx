import Link from 'next/link';
import Image from 'next/image';

interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}

const ThreadCard = ({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
}: Props) => {
  console.log(id, currentUserId, parentId, comments, community, createdAt);

  return (
    <article className="reouned-xl flex w-full flex-col bg-dark-2 p-7">
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                src={author.image}
                alt="Profile Iamge"
                fill
                className="cursor-pointer rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>
      <h2 className="text-small-regular text-light-2">{content}</h2>
    </article>
  );
};

export default ThreadCard;
