import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./Pages/AiChat";
import Documents from "./Pages/Document";
import Quiz from "./Pages/QuizApp";
import Setting from "./Pages/Setting";
import History from "./Pages/History";
import Logout from "./Pages/Logout";
import Upload from "./Pages/Upload";
import PageLayout from "./Layout/PageLayout";
import Timetable from "./Pages/TimeTable";


const AllScreen: React.FC = () => {
    return (
        
        <Routes>
            <Route element={<PageLayout />}>
                <Route path="/" element={<Timetable/>}/>
            
                <Route path="/chat" element={<Chat />} />
                <Route path="/document" element={<Documents />}/>
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/history" element={<History />}/>
                <Route path="/logout" element={<Logout />} />

            </Route>
        </Routes>
    );
};

export default AllScreen;