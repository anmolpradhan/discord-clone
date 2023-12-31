'use client'

import { useEffect, useState } from 'react';

import CreateServerModel from '@/components/modals/create-server-modal';
import InviteModal from '@/components/modals/invite-modal';
import DeleteServerModal from '../modals/delete-server-modal';
import EditServerModal from '../modals/edit-server-modal';
import MembersModal from '../modals/members-modal';

export const ModalProvider=()=>{
    const [isMounted,setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[])

    if(!isMounted){
        return null;
    }
    return(
        <><CreateServerModel/><InviteModal/><DeleteServerModal/><EditServerModal/><MembersModal/></>
    )
}