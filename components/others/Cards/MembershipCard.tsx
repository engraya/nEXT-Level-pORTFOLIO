import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


import Link from 'next/link'

type MembershipProps = {
    id: number,
      img: string
      membershipTitle: string
      membershipBody: string
      date: string,
      membershipID: string,
      doc: string,
}

type Membership = {
    membership : MembershipProps
}


const MemebershipCard = ({ membership } : Membership) => {
    return (
        <Card>
            <Top>
                <Image src={membership.img} />
                <Body>
                    <div className='text-emerald-100 font-bold text-lg'>{membership.membershipTitle}</div>
                    <div className='text-sm font-normal text-emerald-100'>{membership.membershipBody}</div>
                    <div className='text-sm font-normal text-emerald-100'><span>Membership ID : </span>{membership.membershipID}</div>
                    <div className='text-xs font-normal text-emerald-100'>{membership.date}</div>
                </Body>
            </Top>
            {membership.doc &&
                <Link href={membership.doc} target='_blank'>
                    <Document src={membership.doc} />
                </Link>
            }
        </Card>
    )
}

export default MemebershipCard