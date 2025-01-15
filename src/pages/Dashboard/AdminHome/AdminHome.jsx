import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl">
        Hi, Welcome{" "}
        <span className="font-bold">
          {" "}
          {user?.displayName ? user?.displayName : "Back"}!
        </span>
      </h2>

      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
            
          <div className="stat-title flex items-center"> <FaDollarSign className="text-md"></FaDollarSign>Revenue</div>
          <div className="stat-value">{stats?.revenue}$</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title flex items-center gap-1"><FaUsers className="text-md"></FaUsers>Users</div>
          <div className="stat-value">  {stats?.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title flex items-center gap-1"> <GiForkKnifeSpoon></GiForkKnifeSpoon> Total Items</div>
          <div className="stat-value">{stats?.menuItems}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>


        <div className="stat">
          <div className="stat-title flex items-center gap-1"> <FaBook></FaBook> Total Users</div>
          <div className="stat-value">{stats?.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
