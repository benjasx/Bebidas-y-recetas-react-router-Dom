import { StateCreator } from "zustand";


type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
  notification: Notification
};


export const createCreateNotificationSlice: StateCreator<NotificationSliceType> = (set, get) => ({
  notification: {
    text: 'asd',
    error: false,
    show: true
  }
});
