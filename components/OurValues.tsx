const values = [
    {
      name: 'Leadership with Integrity',
      email: 'We lead with vision and purpose, combining transformational and thought leadership with unwavering honesty, accountability, and ethical conduct in all we do.',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Diligence & Excellence',
      email: 'We are meticulous and thorough in our quest to help businesses achieve their objectives.Excellence is our culture. We deliver quality service within the shortest period.',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
 
    {
      name: 'Collaborative Excellence',
      email: 'Through strong teamwork and strategic alliances with local and international partners, we deliver efficient, client-focused, and globally informed legal solutions.',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },

  ]
  
  export default function OurValues() {
    return (
      <ul role="list" className="divide-y divide-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
        {values.map((value) => (
          <li key={value.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">{value.name}</p>
                <p className="mt-1  text-xs/5 text-gray-500">{value.email}</p>
              </div>
            </div>
           
          </li>
        ))}
      </ul>
    )
  }
  