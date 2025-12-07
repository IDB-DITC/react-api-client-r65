import React, { useEffect, useState } from 'react'
import repo from "../services/author-repository"

import { NavLink } from 'react-router';
import  Author  from '../model/author';
import { toast } from 'react-toastify';


export default function AuthorList() {
    const [model, updateModel] = useState<Author[]>([]);


    async function LoadData() {
        try {
            var res = await repo.GetAuthorList();
            updateModel(res.data);
            if (res.status === 200) {
                toast.success("Author data loaded", { autoClose: 3000 });
            }

        } catch (e) {
            toast.error("Network error", { autoClose: false });
            console.error(e);
        }
       
    }

    useEffect(function () {
        LoadData();
    }, [])

    return (<>

        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    model.map((ath, idx) => {
                        return (<>
                            <AuhtorRow {...ath}></AuhtorRow>
                        </>)
                    })
                }
                    
            </tbody>
        </table>



    </>)


}


function AuhtorRow(ath:Author
) {
    return (<>
        <tr>
            <td>{ath.id}</td>
            <td>{ath.authorName}</td>
            <td>
                {ath.photo && <img src={ath.photo} width="100" alt={ath.authorName} />}                
            </td>
            <td>
                <NavLink to={`/edit/${ath.id}`}>edit-{ ath.id}</NavLink>
            </td>
        </tr>
    </>)
}




