
import { DoctorsListComponent } from '@/components/doctors/DoctorsListComponent';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import React from 'react';

const DoctorsPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <DoctorsListComponent />
            <Footer />
        </div>
    );
};

export default DoctorsPage;