require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from frontend folder
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Serve video files
app.use('/videos', express.static(path.join(__dirname, '..', 'videos')));

// API Routes
app.get('/api/videos/:camera', (req, res) => {
    try {
        const { camera } = req.params;
        const videosPath = path.join(__dirname, '..', 'videos', camera);
        
        // Check if camera folder exists
        if (!fs.existsSync(videosPath)) {
            return res.json({ success: false, error: 'Camera not found', dates: {} });
        }

        // Read all date folders
        const dates = {};
        const dateFolders = fs.readdirSync(videosPath).filter(folder => {
            const folderPath = path.join(videosPath, folder);
            return fs.statSync(folderPath).isDirectory();
        });

        dateFolders.forEach(date => {
            const datePath = path.join(videosPath, date);
            const files = fs.readdirSync(datePath).filter(file => file.endsWith('.mp4'));
            
            const clips = files.map(file => {
                const timeMatch = file.match(/(\d{2})-(\d{2})\.mp4$/);
                const time = timeMatch ? `${timeMatch[1]}:${timeMatch[2]}` : file.replace('.mp4', '');
                return {
                    time: time,
                    file: `videos/${camera}/${date}/${file}`
                };
            }).sort((a, b) => a.time.localeCompare(b.time));

            if (clips.length > 0) {
                dates[date] = { clips };
            }
        });

        const sortedDates = {};
        Object.keys(dates).sort().reverse().forEach(key => {
            sortedDates[key] = dates[key];
        });

        res.json({ 
            success: true, 
            camera: camera,
            dates: sortedDates 
        });
    } catch (error) {
        console.error('Error reading videos:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get all cameras
app.get('/api/cameras', (req, res) => {
    try {
        const videosPath = path.join(__dirname, '..', 'videos');
        
        if (!fs.existsSync(videosPath)) {
            return res.json({ success: true, cameras: [] });
        }

        const cameras = fs.readdirSync(videosPath)
            .filter(folder => fs.statSync(path.join(videosPath, folder)).isDirectory())
            .map(camera => ({
                id: camera,
                name: camera.replace('camera', 'Camera ').replace(/_/g, ' ')
            }));

        res.json({ success: true, cameras });
    } catch (error) {
        console.error('Error reading cameras:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Serve index.html for all other routes (SPA support)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log('=============================================');
    console.log(`🚀 DVR Playback Server Running`);
    console.log(`📍 Port: ${PORT}`);
    console.log(`📂 Videos: ${path.join(__dirname, '..', 'videos')}`);
    console.log(`🌐 http://localhost:${PORT}`);
    console.log('=============================================');
});