interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

const ThreadsTab = async ({ currentUserId, accountId, accountType }: Props) => {
  console.log(currentUserId, accountId, accountType);
  return <section>ThreadsTab {accountId}</section>;
};

export default ThreadsTab;
