import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

function Card({ children, className = '' }) {
  return <div className={`border border-zinc-800 shadow-xl ${className}`}>{children}</div>;
}
function CardContent({ children, className = '' }) { return <div className={className}>{children}</div>; }
function Button({ children, className = '', onClick, type = 'button' }) {
  return <button type={type} onClick={onClick} className={`px-4 py-2 bg-zinc-100 text-zinc-900 font-medium hover:opacity-90 transition rounded-xl ${className}`}>{children}</button>;
}
function Icon({ symbol }) { return <span aria-hidden='true'>{symbol}</span>; }

export default function App() {
 const [playing,setPlaying]=useState(false);
 const [choice,setChoice]=useState('');
 const [loveAccepted,setLoveAccepted]=useState(false);
 const [noPos,setNoPos]=useState({x:0,y:0});
 const stars=useMemo(()=>Array.from({length:40},(_,i)=>({id:i,left:Math.random()*100,top:Math.random()*100,d:1+Math.random()*3})),[]);
 const moveNoButton=()=>setNoPos({x:Math.floor(Math.random()*180)-90,y:Math.floor(Math.random()*120)-60});
 return <div className='min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden relative'>
 {stars.map(s=><motion.div key={s.id} className='absolute w-1 h-1 bg-white rounded-full opacity-60' style={{left:`${s.left}%`,top:`${s.top}%`}} animate={{opacity:[0.2,0.8,0.2]}} transition={{repeat:Infinity,duration:s.d}} />)}
 <div className='max-w-4xl mx-auto px-6 py-12 relative z-10'>
 <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className='text-center space-y-4'>
 <div className='flex justify-center text-5xl'><Icon symbol='❤️'/></div>
 <h1 className='text-4xl md:text-6xl font-bold'>365 days wityuuuu ❤️</h1>
 <p className='text-zinc-300 text-lg'>Hiiiiii sayanggkuuuuuu... </p>
 <p className='text-zinc-300 text-lg'>dunno what to sayyy wkwkk, kayakkk apaya wkwkwk jd malu ih, ga kerasa ya dr yg dlu gengsian abiez hts an lama HAHA tau2 udh setaun bareng aja, makasih ya udah selalu sabar sama aku</p>
 <p className='text-zinc-500 text-sm'>I LOVE YOU sayaaaaanggggg</p>
 <Button onClick={()=>setPlaying(v=>!v)} className='rounded-2xl mt-2 inline-flex items-center gap-2'>{playing?'Hide Message':'Show Message'} <Icon symbol='✨'/></Button>
 </motion.div>
 {playing && <div className='mt-6 max-w-xl mx-auto'><p className='text-center text-sm text-zinc-400 mb-3'>siapa pers lopemu xixixixi ✨</p></div>}
 <div className='mt-10 max-w-xl mx-auto bg-zinc-900/80 rounded-3xl border border-zinc-800 p-6 text-center relative overflow-hidden'>
 <h2 className='text-2xl font-semibold mb-2'>kamuuuu sayang aku ndaaaaa? 💗</h2>
 {!loveAccepted ? <>
 <p className='text-zinc-400 text-sm mb-5'>Jawab yang jujur ya bebihhh😚</p>
 <div className='relative h-28 flex items-center justify-center gap-4'>
 <Button className='rounded-2xl px-6 py-3' onClick={()=>setLoveAccepted(true)}>Sayang downgzzz 💖</Button>
 <div style={{transform:`translate(${noPos.x}px,${noPos.y}px)`}} className='transition-all duration-300'>
 <Button className='rounded-2xl px-6 py-3 bg-zinc-800 text-zinc-100 hover:bg-zinc-700' onMouseEnter={moveNoButton} onClick={moveNoButton}> gk </Button>
 </div></div></> : <motion.p initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} className='text-pink-300 text-lg'>lovyumooorrrrrr bebihhhh 💞</motion.p>}
 </div>
 <div className='mt-8 flex justify-center'><img src='https://lh3.googleusercontent.com/d/130dhArvb9pfmfx7_3-V2ZPxPS8ZRqTko=w1200' className='w-full max-w-2xl h-72 object-cover object-center rounded-3xl shadow-2xl border border-zinc-800 bg-zinc-900'/></div>
 <div className='grid md:grid-cols-2 gap-6 mt-10'>
 <Card className='bg-zinc-900/80 rounded-2xl'><CardContent className='p-6 space-y-3'><h2 className='text-2xl font-semibold'>sayaangkuuu</h2><p className='text-zinc-300'>thank u for choosing us, even on the hard days. Being with u feels easy in all the ways that matter. eaaa alay benerrrr wkwkwk, hopefully kedepannya sama2 terus ya hehehehehe,</p></CardContent></Card>
 <Card className='bg-zinc-900/80 rounded-2xl'><CardContent className='p-6 space-y-4'><h2 className='text-2xl font-semibold'>Malam Ini Mau ngapainnn???</h2><div className='grid grid-cols-2 gap-3'><Button className='rounded-2xl h-16'>🎬 Nonton</Button><Button className='rounded-2xl h-16 bg-zinc-800 text-zinc-100'>🎮 Main</Button></div>{choice && <div>{choice}</div>}</CardContent></Card>
 <Card className='bg-zinc-1000/80 rounded-2xl'><CardContent className='p-6 space-y-3'><h2 className='text-2xl font-semibold'>kasihtau aku jwbnnya apa karna aku blm paham gmn send notif klo km pencet pilihannya hehe</h2></CardContent></Card>
 </div></div></div>
}
