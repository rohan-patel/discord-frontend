import store from "../../store/store";
import { setMessages } from "../../store/actions/chatActions";

export const updateDirectChatHistoryIfActive = (data) => {
  // console.log(data);

  const { messages, participants } = data;

  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails.userId;

  // When a new conversation is about to start convo object won't be there in database
  if (participants.length === 0) {
    participants.push(userId);
    participants.push(receiverId);
  }
  // console.log(receiverId);
  // console.log(userId);

  if (receiverId && userId) {
    const usersInConversation = [receiverId, userId];

    updateChatHistoryIfSameConversationActive({
      participants,
      usersInConversation,
      messages,
    });
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  usersInConversation,
  messages,
}) => {
  const result = participants.every(function (participantId) {
    return usersInConversation.includes(participantId);
  });

  if (result) {
    store.dispatch(setMessages(messages));
  }
};

export const updateGroupChatHistoryIfActive = (data) => {
  const { groupId, messages } = data;
  const chosenChatId = store.getState().chat.chosenChatDetails?.id;

  if (chosenChatId === groupId) {
    store.dispatch(setMessages(messages));
  }
};
