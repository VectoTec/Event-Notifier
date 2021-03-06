import React from "react";
import { connect } from "react-redux";
import AlertModal from "./AlertModal";
import SocialShareModal from "./SocialShareModal";
import InfoModal from "./InfoModal";
import ImageModal from "./ImageModal";

const modalLookup = {
	AlertModal,
	SocialShareModal,
	InfoModal,
	ImageModal,
};

const ModalManagar = ({ currentModal }) => {
	let renderedModal;

	if (currentModal) {
		const { modalType, modalProps } = currentModal;
		const ModalComponent = modalLookup[modalType];
		renderedModal = <ModalComponent {...modalProps} />;
		return <div>{renderedModal}</div>;
	}
	return <></>;
};

const mapStateToProps = (state) => {
	return { currentModal: state.modals };
};

export default connect(mapStateToProps)(ModalManagar);
