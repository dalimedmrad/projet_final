import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneById, log } from '../../JS/userslice/userSlice';
import {Modal,Button} from 'react-bootstrap';
import './UserDetail.css';

const UserDetail = ({trajet}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const UserDetail = useSelector(state => state.user.userDetail);
    return (
      <>
      <button className="btn btn-primary" onClick={()=>{handleShow();dispatch(getOneById(trajet.createdBy))}}>
        Contact
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Information sur le chauffeur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="data">
            <img className="imgg1" src={UserDetail?.image?`http://localhost:5000${UserDetail?.image}`:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImJhY2tncm91bmQ6I2RkZCI+PHBhdGggZmlsbD0iI0RERCIgZD0iTTAgMGg0OHY0OEgweiIvPjxwYXRoIGQ9Ik0yNCAyOWMyLjM3IDAgNS4yNC4yNDggNy42MTEuNzQ1IDMuODk5LjU0NCA2LjU4IDMuMTQzIDcuNzQgNy4wNzNDMzUuNjg1IDQxLjIwOCAzMC4xNjkgNDQgMjQgNDRjLTYuMTggMC0xMS43MDYtMi44MDMtMTUuMzc1LTcuMjA4IDEuMTA2LTMuNzk0IDMuNjgtNi4yMzcgNy43NjQtNy4wNDdDMTguNzU5IDI5LjI0OCAyMS42MjkgMjkgMjQgMjl6bTAtMjFhOCA4IDAgMDE4IDh2MmE4IDggMCAxMS0xNiAwdi0yYTggOCAwIDAxOC04eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="}/>
            <div className="name">{UserDetail?.name} {UserDetail?.lastName}</div>
            <div className="info"><p><i class="fas fa-envelope"></i> {UserDetail?.email}</p> <p><i class="fas fa-phone-alt"></i> +216 {UserDetail?.phone}</p></div>
          </div>
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{handleClose();dispatch(log())}}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default UserDetail;
