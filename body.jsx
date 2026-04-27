import React from "react";

const Body = () => {
    return (
        <>
            <div className="mb-4">
                <h3>About Bookmart Library</h3>
                <p>
                    Bookmart Library is your student-friendly online library portal. Sign up to browse books,
                    reserve titles, track your borrowing, and discover curated reading lists.
                </p>
            </div>
            <div className="row gx-3">
                <div className="col-sm-6 mb-3">
                    <div className="feature-box p-3 rounded-3 bg-white shadow-sm h-100">
                        <h5>Fast Access</h5>
                        <p className="mb-0">Find books, notes, and research material in seconds.</p>
                    </div>
                </div>
                <div className="col-sm-6 mb-3">
                    <div className="feature-box p-3 rounded-3 bg-white shadow-sm h-100">
                        <h5>Easy Membership</h5>
                        <p className="mb-0">Create your account in one step and start borrowing.</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Body;
