import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/nav/Navbar';
import TaskList from '../components/task/TaskList';
import TaskBoard from '../components/task/TaskBoard'
export default function Home() {
    return (
        <Layout>
            <Navbar/>
            <TaskList/>
            <TaskBoard/>
        </Layout>
    )
}
