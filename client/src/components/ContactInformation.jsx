import { useState, useEffect } from "react";

function ContactInformation({ ThemeStyles }) {
  const [contactItems, setContactItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/clients")
      .then((res) => res.json())
      .then((contactItems) => setContactItems(contactItems));
  }, []);
  return (
    <div style={ThemeStyles}>
      <h1 className="font-bold p-3 text-2xl">Contacts</h1>
      <h3 className="text-1x1 p-4">
        List of contacts for future reference
      </h3>
      <table className="min-w-full border divide-y border-gray-500 divide-gray-500">
        <thead className="bg-sky-700 border-gray-500">
          <tr className="bg-orange-950 border-orange-950">
            <th className="py-3  border-gray-500 px-6 text-left">Id</th>
            <th className="py-3  border-gray-500 px-6 text-left">Name</th>
            <th className="py-3  border-gray-500 px-6 text-left">Email</th>
            <th className="py-3  border-gray-500 px-6 text-left">
              Contact No.
            </th>
            <th className="py-3  border-gray-500 px-6 text-left">Address </th>
          </tr>
        </thead>
        <tbody className=" border-2 border-gray-500">
          {contactItems.map((contactItem) => (
            <tr key={contactItem.id} className="border-t border-orange-700 hover:bg-cyan-400">
              <td className="text-2xl font-medium py-2 border-orange-500 px-4 border-r">
                {contactItem.id}
              </td>
              <td className="text-2xl font-medium py-2 border-orange-500 px-4  border-r">
                {contactItem.name}
              </td>
              <td className="text-2xl font-medium py-2 border-orange-500 px-4 border-r">
                {contactItem.email}
              </td>
              <td className="text-2xl font-medium py-2 border-orange-500 px-4 border-r">
                {contactItem.phone_number}
              </td>
              <td className="text-2xl font-medium py-2 border-orange-500 px-4 border-r">
                {contactItem.address}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactInformation;
