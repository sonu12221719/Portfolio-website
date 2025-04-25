import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis, YAxis
} from 'recharts';

const platformColors = {
  LeetCode: '#FFA116',
  Codeforces: '#1F8ACB',
  HackerRank: '#2EC866',
  GeeksforGeeks: '#0F9D58',
};

const CodingProfile = () => {
  const profiles = [
    {
      platform: 'LeetCode',
      link: 'https://leetcode.com/u/sonukumar200219/',
      stats: [
        { month: 'Jan', solved: 20 },
        { month: 'Feb', solved: 12 },
        { month: 'Mar', solved: 30 },
        { month: 'Apr', solved: 20 },
      ],
    },
    {
      platform: 'GeeksforGeeks',
      link: 'https://www.geeksforgeeks.org/user/sonukumaxvaq/',
      stats: [
        { month: 'Jan', points: 50 },
        { month: 'Feb', points: 20 },
        { month: 'Mar', points: 20 },
        { month: 'Apr', points: 30 },
      ],
    },
  ];

  return (
    <section
      id="coding-profile"
      className="py-20 text-white font-mono"
    >
      <h1 className="text-4xl bg-gradient-to-r from-teal-400 to-cyan-600 text-center text-transparent bg-clip-text mb-12 tracking-tight">
        Coding Profiles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {profiles.map((profile, index) => {
          const dataKey = Object.keys(profile.stats[0]).find(k => k !== 'month');
          const themeColor = platformColors[profile.platform] || '#38bdf8';

          return (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-6 transition duration-300 transform hover:scale-[1.015] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex flex-col items-center shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${themeColor}20, white)`,
                border: `1px solid ${themeColor}50`,
              }}
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                {profile.platform}
              </h2>

              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={profile.stats}>
                    <defs>
                      <linearGradient id={`color-${index}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={themeColor} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={themeColor} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#475569" />
                    <YAxis stroke="#475569" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        border: '1px solid #e2e8f0',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey={dataKey}
                      stroke={themeColor}
                      strokeWidth={3}
                      dot={{ r: 5, fill: themeColor }}
                      activeDot={{ r: 8 }}
                      fillOpacity={1}
                      fill={`url(#color-${index})`}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default CodingProfile;
