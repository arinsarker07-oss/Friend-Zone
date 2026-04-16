import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div>

            <div className="flex justify-center items-center mt-50 ">
                <HashLoader color="#ad46ff" />loading.......
            </div>
        </div>
    );
};

export default loading;