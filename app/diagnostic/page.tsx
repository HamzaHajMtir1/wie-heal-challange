import { DiagnosticFormComponent } from '@/components/diagnostic/diagnostic-form';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import React from 'react';

const DiagnosticPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <DiagnosticFormComponent />
            <Footer />
        </div>
    );
};

export default DiagnosticPage;