function UserItem({ key, user }) {

    return (
        <tr key={user.id}>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">{user.name}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">{user.email}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">{user.phone}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">{user.company.name}</p>
            </td>
        </tr>

    )

}

export default UserItem;