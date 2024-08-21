import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Avatar, Typography, Progress, Card, Space } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './App.css';
import defaultPic from './assets/default-pic.png'; // Adjust the path according to your project structure

const { Title, Text } = Typography;

const Profile = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/profile') // Replace with your actual backend endpoint
            .then(response => setProfileData(response.data))
            .catch(error => console.error("There was an error fetching the profile data!", error));
    }, []);

    if (!profileData) return <div>Loading...</div>;

    return (
        <Card className="profile-container">
            <Row gutter={[16, 16]} align="middle">
                <Col span={6}>
                    <Avatar 
                        size={80} 
                        src={profileData.picture || defaultPic} 
                        className="profile-avatar" 
                    />
                </Col>
                <Col span={18}>
                    <Title level={4} style={{ color: '#FFFFFF' }}>
                        {profileData.name}
                    </Title>
                    <Text style={{ color: '#AEACAC' }}>
                        {profileData.gender}/{profileData.age}
                    </Text>
                    <Text type="secondary" style={{ display: 'block', color: '#7D7D7D', marginTop: '8px' }}>
                        Patient ID: {profileData.patientId}
                    </Text>
                </Col>
            </Row>

            <Row gutter={[16, 16]} className="goal-container">
                <Col span={14} style={{ textAlign: 'center' }}>
                    <div className="progress-wrapper">
                        <Progress
                            type="dashboard"
                            percent={profileData.goalReached}
                            format={percent => `${percent}%`}
                            strokeColor="#FCA800"
                            className="custom-progress"
                        />
                        <Text style={{ color: '#FFFFFF' }}>Goal reached</Text>
                    </div>
                </Col>
                {/* <Col span={10}>
                    <Space direction="vertical" className="emg-rom">
                        <Text>EMG</Text>
                        <Text>ROM</Text>
                    </Space>
                </Col> */}
            </Row>

            <Row gutter={[16, 16]} className="contact-info">
                <Col span={12}>
                    <Text className="phone-number"><PhoneOutlined /> {profileData.phone}</Text>
                </Col>
                <Col span={12}>
                    <Text><MailOutlined /> {profileData.email}</Text>
                </Col>
            </Row>

            <Row gutter={[16, 16]} className="medical-info">
                <Col span={24}>
                    <Text><strong>Affected side:</strong> {profileData.affectedSide}</Text>
                </Col>
                <Col span={24}>
                    <Text><strong>Condition:</strong> {profileData.condition}</Text>
                </Col>
                <Col span={24}>
                    <Text><strong>Specialty:</strong> {profileData.specialty}</Text>
                </Col>
                <Col span={24}>
                    <Text><strong>Medical history:</strong> {profileData.medicalHistory}</Text>
                </Col>
            </Row>
        </Card>
    );
};

export default Profile;
