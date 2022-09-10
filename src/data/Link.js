
import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart,  } from 'react-icons/fi';

import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';




export   const LinkData = [
    { title: "Dashboard", icon:< AiOutlineCalendar/>},
    { title: "Subjects", icon:< AiOutlineShoppingCart/> },
    { title: "Accounts",  icon:< FiShoppingBag/>, gap: true },
    { title: "Classes ",  icon:< FiEdit/> },
    { title: "Inbox",  icon:< FiPieChart/> },
    { title: "Analytics",  icon:< BiColorFill/> },
    { title: "Chat ",  icon:< IoMdContacts/>, gap: true },
    { title: "Setting",  icon:< RiContactsLine/> },
  ];