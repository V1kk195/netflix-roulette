import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { MODAL_TYPES } from "../../types/global.types";

interface ModalState {
    name: MODAL_TYPES;
}

const initialState: ModalState = {
    name: null,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, { payload }: PayloadAction<MODAL_TYPES>) => {
            state.name = payload;
        },
        closeModal: (state) => {
            state.name = null;
        },
    },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
export const selectModalName = (state: RootState) => state.modal.name;
