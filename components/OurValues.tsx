const values = [
    {
      name: 'Integrity',
      email: 'We uphold the highest ethical standards in all our actions and decisions, ensuring honesty and transparency in every client interaction.',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Excellence',
      email: 'We are committed to delivering outstanding legal services with attention to detail, professionalism, and strategic insight.',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
  