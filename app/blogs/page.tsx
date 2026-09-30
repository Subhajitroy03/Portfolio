import EditorialJournal from "../../components/EditorialJournal";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Blog" };

const blogItems = [
  { 
    id: 'process-vs-thread',
    link: 'https://process-vs-threads.hashnode.dev/process-vs-thread-a-practical-comparison-using-c-programs', 
    title: 'Process vs Thread in C',
    subtitle: 'A Practical Comparison Using C Programs',
    description: 'We, as CS majors, are pretty accustomed to the theoretical definition of Process and Thread, but in this blog, we are going to explore the difference between process and thread in a practical way.',
    image: '/blogs/process-vs-thread.webp',
    category: 'SYSTEMS',
    date: 'SEP 30, 2026',
    readTime: '8 MIN READ'
  },
  { 
    id: 'cors-issue',
    link: 'https://corsissue.hashnode.dev/cors-issue-and-how-to-fix-it', 
    title: 'Fixing CORS Issues',
    subtitle: 'Understanding and resolving Cross-Origin Resource Sharing',
    description: 'We, as web developers, are pretty accustomed to facing random CORS errors while integrating APIs, but in this blog, we are going to explore the root causes and learn how to fix Cross-Origin Resource Sharing in a practical way.',
    image: '/blogs/cors.webp',
    category: 'BACKEND',
    date: 'SEP 15, 2026',
    readTime: '5 MIN READ'
  }
];

export default function Blogs() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
       <EditorialJournal articles={blogItems} />
    </div>
  )
}
