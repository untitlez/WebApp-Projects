export default function UserImages({ formData, select, handleSelect }) {
  const avatars = [
    { id: "avatar1", src: "/avatar/ace.jpg", alt: "profile image" },
    { id: "avatar2", src: "/avatar/sabo.jpg", alt: "profile image" },
    { id: "avatar3", src: "/avatar/lufy.jpg", alt: "profile image" },
    { id: "avatar4", src: "/avatar/sanji.jpg", alt: "profile image" },
    { id: "avatar5", src: "/avatar/shank.jpg", alt: "profile image" },
    { id: "avatar6", src: "/avatar/zoro.jpg", alt: "profile image" },
    { id: "avatar7", src: "/avatar/bepo.jpg", alt: "profile image" },
    { id: "avatar8", src: "/avatar/brook.jpg", alt: "profile image" },
    { id: "avatar9", src: "/avatar/chopper.jpg", alt: "profile image" },
    { id: "avatar10", src: "/avatar/garp.jpg", alt: "profile image" },
    { id: "avatar11", src: "/avatar/jinbe.jpg", alt: "profile image" },
    { id: "avatar12", src: "/avatar/koby.jpg", alt: "profile image" },
    { id: "avatar13", src: "/avatar/rayleigh.jpg", alt: "profile image" },
    { id: "avatar14", src: "/avatar/mihawk.jpg", alt: "profile image" },
    { id: "avatar15", src: "/avatar/roger.jpg", alt: "profile image" },
  ];

  return (
    <>
      <div className="flex items-center justify-between gap-4 lg:flex-col">
        {/* Avatar Image  */}
        <div className="avatar">
          <div className="h-36 w-36 rounded-full">
            <img src={formData.image || select} alt="profile images" />
          </div>
        </div>
        {/* Avatar List  */}
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn">
            Change Images
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content list-none bg-base-200 border border-base-content/20 rounded-lg z-[1] p-3 w-72
        grid grid-cols-3 gap-3 mt-2"
          >
            {avatars.map((avatar) => (
              <li key={avatar.id}>
                <input
                  type="radio"
                  name="avatar"
                  id={avatar.id}
                  value={avatar.src}
                  className="hidden peer"
                  onChange={(e) => handleSelect(e)}
                />
                <label
                  htmlFor={avatar.id}
                  className="block cursor-pointer border-4 border-transparent peer-checked:border-blue-500 rounded-full"
                >
                  <img
                    src={avatar.src}
                    alt={avatar.alt}
                    className="w-20 h-20 rounded-full shadow-xl"
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
