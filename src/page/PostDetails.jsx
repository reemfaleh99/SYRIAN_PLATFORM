import React from 'react'
import LatestArticles from "../components/LatestArticles"
import { BiCalendar, BiShare } from 'react-icons/bi'
import Button from "../components/Button"

const PostDetails = () => {
  return (
    <div className='py-12 xl:px-24 px-12 flex flex-col lg:flex-row gap-5'>
        <div className='w-full lg:w-1/4'>
            <LatestArticles/>
        </div>
       <div className='shadow-lg p-4 border border-gray-200 rounded-lg w-full lg:w-3/4'>
        <h5 className='text-3xl font-medium'>منشور تصميم ui ux والمواقع الالكترونية</h5>
        <div className='flex justify-between mt-4'>
            <span className='flex items-center gap-1'><BiCalendar/> 20 ايلول/2025 </span>
            <span className='flex items-center gap-1 border border-gray-300 rounded-xl p-2 '><BiShare/> مشاركة</span>
        </div>
     <span className='block w-full h-px bg-gray-300 my-5'></span>
        <img src="https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8=" alt="" className='w-full h-[350px]'/>
        <p className='my-5 text-sm text-gray-400'>
            sam voluptates, similique et quisquam ad! In vitae labore quis porro odit autem a, accusamus earum pariatur!
            Dolorum perspiciatis, quod eaque architecto, pariatur cum nobis hic provident, maiores asperiores praesentium eos accusantium. Voluptas rem numquam impedit quis, nobis accusantium id nisi dolorum, repellat exercitationem aut molestias delectus!
            Excepturi sit temporibus suscipit totam omnis maxime exercitationem nihil, quo assumenda reprehenderit debitis commodi possimus quasi illum cum quia voluptatum odio? Excepturi ad asperiores distinctio iste quasi similique assumenda aliquid.
            Dignissimos nam voluptas fugiat, nisi ad iusto, nemo, explicabo repudiandae dolorum in vel illo labore aliquam fugit architecto esse autem ipsum saepe quod! Esse pariatur sunt ratione, dolore placeat deleniti!
            Minus repellendus tenetur magni ex, maxime numquam aspernatur voluptatibus, nulla aliquam incidunt a at mollitia optio placeat iste ratione quis nemo eligendi reprehenderit enim rerum illo quaerat asperiores totam. Earum?
            Harum earum possimus nulla odit, impedit atque nihil quaerat error, labore iure asperiores laboriosam at assumenda! Consequatur aspernatur sapiente recusandae tempore voluptatum, autem beatae nobis minus ipsa. Et, earum ea.
            In labore sunt impedit blanditiis minus, nisi placeat eum culpa, facilis iusto minima ab totam, tenetur quas quaerat voluptates. Deserunt odio veniam nam ea. Facere, accusamus dolor. Modi, ea corrupti?
            Error incidunt eligendi, quae nulla voluptatem aliquid est quasi ullam inventore, neque et quia velit ad enim vitae qui, eos dicta illum hic reprehenderit voluptates rerum tenetur accusamus nam? Nihil!
            Repellat officiis tenetur, adipisci, veniam veritatis nulla aliquid laudantium ad, molestiae impedit numquam temporibus facilis aspernatur? Commodi, sapiente sunt. Commodi eos consectetur ratione provident atque! Molestiae unde veritatis deserunt consectetur?
            Saepe dignissimos alias molestias autem doloremque quidem quas dolor quod est omnis unde amet architecto sapiente voluptates id in perferendis pariatur consequuntur sed provident ex, dicta veniam? Laboriosam, atque in!
            Earum asperiores libero fugit, magni cumque blanditiis dolor veritatis sint voluptates maxime. Quam similique repellendus ullam nostrum, cupiditate mollitia minima beatae consectetur laborum magnam porro dolore unde commodi magni deserunt!
            Consequuntur ut eligendi inventore tempore praesentium soluta sunt sed ab voluptatum minima possimus, atque ipsum quidem, suscipit qui incidunt reprehenderit rerum dolore? Molestias sed laudantium porro rem provident voluptatem quos.
            Doloremque libero doloribus fuga neque totam eveniet nesciunt hic at cupiditate ea laborum pariatur, saepe dicta quibm iure? In?
        </p>
     <span className='block w-full h-px bg-gray-300 my-5'></span>
        <div>
            <h6 className='font-medium text-xl'>صور وملحقات اخرى</h6>
            <div className='flex flex-col lg:flex-row gap-1 my-3'>
                <img src="https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8=" alt="" className='w-full lg:w-1/3 rounded-xl'/>
                <img src="https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8=" alt="" className='w-full lg:w-1/3 rounded-xl'/>
                <img src="https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8=" alt="" className='w-full lg:w-1/3 rounded-xl'/>
            </div>
        </div>
     <span className='block w-full h-px bg-gray-300 my-5'></span>
        <div>
            <h6 className='font-medium text-xl mt-10 mb-5'>التعليقات: <span className='text-gray-400'>(122 تعليق)</span></h6>
            <div>
                <div className='bg-gray-100 p-4 rounded-xl'>
                    <div className='flex items-center justify-between'>
                       <div className='flex gap-2'>
                         <img src="https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8=" alt="" className='w-12 h-12 rounded-full'/>
                        <div>
                            <p className='font-semibold text-xl'>محمد</p>
                            <span className='text-gray-400'>طالب</span>
                        </div>
                       
                       </div> 
                       <p className='font-medium'>24 ايار 2025</p>
                    </div> 
                    <div>
                            <p className='text-sm my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora ipsa dignissimos iste ratione ipsam, earum deserunt iusto, illum sint consequatur inventore eveniet, exercitationem vitae labore modi quo non adipisci!</p>
                            <div className='flex justify-between items-center'>
                                <span className='text-gray-400 font-medium'>اخفاء الردود</span>
                                <span className='text-babyBlue font-medium'>رد على التعليق</span>
                            </div>
                        </div>
                </div>
                <div className='bg-gray-100 p-4 rounded-xl my-3'>
                    <div className='flex items-center justify-between'>
                       <div className='flex gap-2'>
                         <img src="https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8=" alt="" className='w-12 h-12 rounded-full'/>
                        <div>
                            <p className='font-semibold text-xl'>محمد</p>
                            <span className='text-gray-400'>طالب</span>
                        </div>
                       
                       </div> 
                       <p className='font-medium'>24 ايار 2025</p>
                    </div> 
                    <div>
                            <p className='text-sm my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora ipsa dignissimos iste ratione ipsam, earum deserunt iusto, illum sint consequatur inventore eveniet, exercitationem vitae labore modi quo non adipisci!</p>
                            <div className='flex justify-between items-center'>
                                <span className='text-gray-400 font-medium'>اخفاء الردود</span>
                                <span className='text-babyBlue font-medium'>رد على التعليق</span>
                            </div>
                        </div>
                </div>
                <div className='bg-gray-100 p-4 rounded-xl'>
                    <div className='flex items-center justify-between'>
                       <div className='flex gap-2'>
                         <img src="https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8=" alt="" className='w-12 h-12 rounded-full'/>
                        <div>
                            <p className='font-semibold text-xl'>محمد</p>
                            <span className='text-gray-400'>طالب</span>
                        </div>
                       
                       </div> 
                       <p className='font-medium'>24 ايار 2025</p>
                    </div> 
                    <div>
                            <p className='text-sm my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora ipsa dignissimos iste ratione ipsam, earum deserunt iusto, illum sint consequatur inventore eveniet, exercitationem vitae labore modi quo non adipisci!</p>
                            <div className='flex justify-between items-center'>
                                <span className='text-gray-400 font-medium'>اخفاء الردود</span>
                                <span className='text-babyBlue font-medium'>رد على التعليق</span>
                            </div>
                        </div>
                </div>
            </div>
            <div className='w-full border border-gray-300 rounded-xl my-5 gap-5 flex flex-col lg:flex-row p-5'>
                <input type="text" className='w-[99%] bg-gray-300 border-b-4 border-b-gray-500 p-4 rounded-xl' placeholder='تضف تعليق هنا' />
                <Button title="نشر" bg="babyBlue" text="white" rounded='xl'/>
            </div>
        </div>
       </div>
    </div>
  )
}

export default PostDetails
