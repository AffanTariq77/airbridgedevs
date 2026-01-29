
import React, { useEffect, useState } from 'react';
import Popup from '@/components/ui/popup';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableFooter } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type Submission = {
  id: number;
  name: string;
  email: string;
  company?: string;
  message: string;
  timestamp: string;
};


const AdminPanel: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[] | any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Submission | null>(null);
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Check for login token
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      window.location.href = '/admin/login';
      return;
    }
    fetch('/api/admin/submissions', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSubmissions(data);
        } else {
          setError(data?.error || 'Unexpected response from server');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch submissions');
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F9FF] flex flex-col">
      <header className="w-full px-0 py-0">
        <nav className="w-full bg-white/90 border-b border-[#b3c7e6]/50 shadow-sm">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-2xl font-bold tracking-tight" style={{ color: '#192841' }}>AirBridge Admin</span>
          </div>
        </nav>
      </header>
      <main className="flex-1 container mx-auto max-w-6xl py-12 px-2 md:px-6">
        <Card className="shadow-lg border-[#b3c7e6]/50 bg-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold" style={{ color: '#192841' }}>Contact Form Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            {loading && <div className="text-center text-lg text-[#23395d]">Loading...</div>}
            {error && <div className="text-center text-red-600 font-semibold">{error}</div>}
            {!loading && !error && Array.isArray(submissions) && (
              <div className="overflow-x-auto max-w-full" style={{maxHeight: '60vh', overflowY: 'auto'}}>
                <Table style={{minWidth: '900px'}}>
                  <TableHeader>
                    <tr className="bg-[#e3edfa] text-[#192841]">
                      <th className="px-4 py-2 rounded-l-lg">ID</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Email</th>
                      <th className="px-4 py-2">Company</th>
                      <th className="px-4 py-2">Message</th>
                      <th className="px-4 py-2">Timestamp</th>
                      <th className="px-4 py-2 rounded-r-lg">Actions</th>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    {submissions.length === 0 ? (
                      <TableRow>
                        <td colSpan={6} className="text-center text-[#23395d] py-8">No submissions yet.</td>
                      </TableRow>
                    ) : (
                      submissions.map((s, i) => (
                        <TableRow key={s.id} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f6fd]'}>
                          <td className="px-4 py-2 font-semibold text-[#23395d] text-center">{s.id}</td>
                          <td className="px-4 py-2 text-[#23395d]">{s.name}</td>
                          <td className="px-4 py-2 text-blue-700 underline break-all">{s.email}</td>
                          <td className="px-4 py-2 text-[#23395d] max-w-xs break-words truncate" title={s.company}>{s.company || '-'}</td>
                          <td className="px-4 py-2 text-[#23395d] max-w-xs break-words truncate" title={s.message}>{s.message}</td>
                          <td className="px-4 py-2 text-[#23395d] whitespace-nowrap">{new Date(s.timestamp).toLocaleString()}</td>
                          <td className="px-4 py-2 text-center">
                            <Button size="sm" variant="outline" className="text-[#23395d] border-[#b3c7e6]" onClick={() => { setSelected(s); setPopupOpen(true); }}>
                              View
                            </Button>
                          </td>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      {/* Popup modal for details */}
      <Popup display="center" isOpen={isPopupOpen && !!selected} onClose={() => { setPopupOpen(false); setSelected(null); }}>
        {selected && (
          <>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-[#23395d] text-center">Submission Details</h2>
            </div>
            <div className="space-y-4 break-words max-w-2xl w-[480px] mx-auto">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#23395d]">Name:</span>
                <span className="text-[#23395d]">{selected.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#23395d]">Email:</span>
                <a href={`mailto:${selected.email}`} className="text-blue-700 underline break-all">{selected.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#23395d]">Company:</span>
                <span className="text-[#23395d]">{selected.company || '-'}</span>
              </div>
              <div>
                <span className="font-semibold text-[#23395d]">Message:</span>
                <div className="mt-2 p-3 bg-[#f3f9ff] rounded text-[#23395d] whitespace-pre-line max-h-48 overflow-y-auto border border-[#e3edfa]">
                  {selected.message}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#23395d]">Timestamp:</span>
                <span className="text-[#23395d]">{new Date(selected.timestamp).toLocaleString()}</span>
              </div>
              <div className="flex justify-end pt-2">
                <Button variant="outline" className="border-[#b3c7e6]" onClick={() => { setPopupOpen(false); setSelected(null); }}>
                  Close
                </Button>
              </div>
            </div>
          </>
        )}
      </Popup>
      <footer className="w-full text-center py-8 text-[#23395d] text-sm border-t border-[#b3c7e6]/50 bg-white/80 mt-10">
        &copy; {new Date().getFullYear()} AirBridge AI Launchpad. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminPanel;