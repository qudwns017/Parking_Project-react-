import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: '홈',
        path: '/',
        icon: <AiIcons.AiFillAppstore />,
        cName: 'nav-text'
    },
    {
        title: '주차권',
        path: '/ticket',
        icon: <AiIcons.AiFillFile />,
        cName: 'nav-text'
    },
    {
        title: '주차장등록',
        path: '/add',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: '주차장확인',
        path: '/list',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: '결제내역',
        path: '/money',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: '공지사항',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    // {
    //     title: '제작정보',
    //     path: '/support',
    //     icon: <IoIcons.IoMdHelpCircle />,
    //     cName: 'nav-text'
    // }
];